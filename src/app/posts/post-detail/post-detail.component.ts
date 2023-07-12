import { PostsService } from './../../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/types';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postId: number | undefined;
  postDetail: Post | undefined;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
    });
    this.postDetail = this.postsService.getPost(+this.postId!);
  }
}
