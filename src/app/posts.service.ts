import { Injectable } from '@angular/core';

import postsJSON from '../assets/posts.json';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts = postsJSON.posts;
  constructor() {}

  getPosts(categoryId: number) {
    return this.posts.filter((post) => post.category_id === categoryId).slice();
  }

  getPost(postId: number) {
    return this.posts.find((post) => post.id === postId);
  }
}
