import { Category } from '../types/types';
import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }
}
