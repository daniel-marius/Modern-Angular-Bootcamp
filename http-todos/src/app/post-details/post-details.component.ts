import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  postId$: Observable<number> = new Observable<number>();
  currentPost$: Observable<Array<Post>> = of([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log(postId);

    this.postId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('id')))
    );

    this.currentPost$ = combineLatest([this.postsService.getAllPosts(), this.postId$]).pipe(
      map(([posts, id]) => posts.filter((post: Post) => post.id === id))
    );
  }

  onUpdatePost(id: number): void {
    this.postsService.updatePostById(id);
    this.router.navigate(['posts']);
  }
}
