import { PostsService } from './../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  posts: Post[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
      this.posts = this.postsService.getPostByQuery(this.searchQuery);
    });
  }
}
