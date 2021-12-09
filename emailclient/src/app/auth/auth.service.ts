import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface IResponse {
  available: boolean;
}

interface ISignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface ISigninCredentials {
  username: string;
  password: string;
}

interface ISignupResponse {
  username: string;
}

interface ISignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string): Observable<IResponse> {
    return this.http.post<IResponse>(this.rootUrl + '/auth/username', {
      username,
    });
  }

  signup(credentials: ISignupCredentials): Observable<ISignupResponse> {
    return this.http
      .post<ISignupResponse>(this.rootUrl + '/auth/signup', credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth(): Observable<ISignedinResponse> {
    return this.http
      .get<ISignedinResponse>(this.rootUrl + '/auth/signedin')
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  signout(): Observable<Object> {
    return this.http.post(this.rootUrl + '/auth/signout', {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: ISigninCredentials): Observable<Object> {
    return this.http.post(this.rootUrl + '/auth/signin', credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
