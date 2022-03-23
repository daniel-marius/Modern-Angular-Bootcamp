import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap, tap, scan } from 'rxjs/operators';

import { Post } from '../models/posts.model';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postInput$: Subject<Post>;
  private _refresh$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  refresh$ = this._refresh$.asObservable();
  // posts$: Observable<Array<Post>> = this.refresh$.pipe(
  //   switchMap(() => this.getAllPosts()),
  //   shareReplay({ bufferSize: 1, refCount: true })
  // );
  postsOutput$: Observable<Array<Post>>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  constructor(private http: HttpClient) {
    this.postInput$ = new Subject<Post>();
    this.postsOutput$ = this.postInput$.pipe(
      scan((acc: Array<Post>, curr: Post) => {
        return [...acc, curr];
      }, [])
    );
    this.postsOutput$.subscribe((result: Array<Post>) => console.log(result));
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${BASE_URL}`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${BASE_URL}/${id}`).pipe(
      map((post: Post) => post),
      shareReplay()
    );
  }

  updatePostById(id: number) {
    this.http
      .patch(
        `${BASE_URL}/${id}`,
        { title: `foo${id}`, body: `far${id}` },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          this._refresh$.next(true);
          console.log(`Post with id: ${id} updated!`, response);
        })
      )
      .subscribe((response) => console.log(response));
  }

  createNewPost() {
    this.http
      .post(
        `${BASE_URL}`,
        {
          title: 'foo',
          body: 'far',
          userId: 1,
        },
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          this._refresh$.next(true);
          this.postInput$.next({ ...(response as Post) });
          console.log('New Post Added!', response);
        })
      )
      .subscribe((response) => console.log(response));
  }
}
