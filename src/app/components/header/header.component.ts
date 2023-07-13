import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
  });

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchForm.value.searchQuery },
    });

    this.searchForm.reset();
  }
}
