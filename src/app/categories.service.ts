import { Injectable } from '@angular/core';

import categoriesJSON from '../assets/categories.json';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories = categoriesJSON.categories;
  constructor() {}

  getCategory(categoryName: string) {
    return this.categories.find((category) => category.name === categoryName);
  }

  getCategories() {
    return this.categories;
  }
}
