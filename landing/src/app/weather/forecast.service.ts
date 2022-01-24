import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {
  map,
  delay,
  switchMap,
  pluck,
  mergeMap,
  filter,
  toArray,
  share,
  tap,
  catchError,
  retry,
  retryWhen
} from 'rxjs/operators';
import { NotificationsService } from '../notifications/notifications.service';

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_INITIAL_RETRIES = 3;
const DEFAULT_MAX_MILLISECONDS = 2000;

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', 'f557b20727184231a597c710c8be3106');
      }),
      switchMap(params =>
        this.http.get<OpenWeatherResponse>(this.url, { params })
      ),
      pluck('list'),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        };
      }),
      toArray<{ dateString: string; temp: number }>(),
      share()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position.coords);
          observer.complete();
        },
        err => observer.error(err)
      );
    }).pipe(
      this.delayedRetry(DEFAULT_MAX_MILLISECONDS, DEFAULT_INITIAL_RETRIES),
      tap({
        next: () => {
          this.notificationsService.addSuccess('Got your location');

        },
        error: (err) => {
          console.log('Error: ', err);
        },
        complete: () => {
          console.log('Action complete!');
        }

      }),
      catchError(err => {
        // #1 - Handle the error
        this.notificationsService.addError('Failed to get your location');
        console.log('Error2: ', err);

        // #2 - Return a new observable
        return throwError(err);
      })
    );
  }

  getErrorMessage(maxRetry: number, maxDelay: string) {
    this.notificationsService.addError(`Tried to load resource for ${maxRetry} times without success. Total time elapsed: ${maxDelay}. Giving up!`);
    return `Tried to load resource for ${maxRetry} times without success. Total time elapsed: ${maxDelay}. Giving up!`;
  }

  delayedRetry(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES) {
    let retries = maxRetry;
    const startTime = new Date().getTime();

    return (src: Observable<any>) =>
      src.pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
          delay(delayMs),
          mergeMap((error) => {

            if (retries-- > 0) {
              const endTime = new Date().getTime();
              const diff = (endTime - startTime) / 1000 + ' Seconds';

              this.notificationsService.addWarning(`Attempt: ${retries} for fetching data. Time Elapsed: ${diff}. Takes longer than usual...`);
              return of(error);
            }
            else {
              const endTime = new Date().getTime();
              const diff = (endTime - startTime) / 1000 + ' Seconds';
              return throwError(this.getErrorMessage(maxRetry, diff))
            }
          })
        ))
      );
  }
}
