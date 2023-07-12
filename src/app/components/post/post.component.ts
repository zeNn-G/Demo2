import { Component, Input } from '@angular/core';
import { Post } from './../../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: Post | undefined;
  expandDescription: boolean = false;

  constructor(private router: Router) {}

  navigateToPost(postId: number) {
    this.router.navigate(['posts', postId]);
  }
}
