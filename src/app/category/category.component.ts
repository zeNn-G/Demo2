import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../types/types';
import { CategoriesService } from '../categories.service';
import { Category as CategoryType } from '../types/types';

enum Category {
  'Getting Started' = 1,
  'User Account',
  'Product Features',
  'Customization Options',
  'Payment Gateways',
  'Security Options',
  'Digital Downloads',
  'Email Marketing',
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  posts: Post[] = [];
  categoryName: string = '';
  categoryId: number | null = null;
  categoryDetails: CategoryType | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryName = params['name'];
      this.categoryId = Category[this.categoryName as keyof typeof Category];
    });

    this.posts = this.postsService.getPosts(this.categoryId!).sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    this.categoryDetails = this.categoriesService.getCategory(
      this.categoryName
    );
  }
}
