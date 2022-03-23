import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  postList$: Observable<Array<Post>> = of([]);

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.refresh$.subscribe(() => {
      this.postList$ = this.getAllData();
    });

    this.postList$ = this.getAllData();
  }

  onCreateNewPost(): void {
    this.postsService.createNewPost();
  }

  private getAllData(): Observable<Array<Post>> {
    return this.postsService.getAllPosts();
  }
}
