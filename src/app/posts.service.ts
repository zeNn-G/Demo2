import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

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

  getPostByQuery(query: string) {
    const fuse = new Fuse(this.posts, {
      keys: [
        {
          name: 'title',
          weight: 1,
        },
        {
          name: 'description',
          weight: 0.5,
        },
      ],
      shouldSort: true,
      includeScore: true,
      threshold: 0.6,
    });

    const results = fuse.search(query).map((result) => {
      return {
        ...result.item,
        score: result.score,
      };
    });

    console.log(results);

    //Sorting by date
    const sortedDateResults = results.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    //Sorting by score less is better
    const sortedByScore = sortedDateResults.sort((a, b) => {
      return a.score! - b.score!;
    });

    return sortedByScore;
  }
}
