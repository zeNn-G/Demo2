import { Component, OnInit } from '@angular/core';

import categoriesJSON from '../../assets/categories.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories = categoriesJSON.categories;
}
