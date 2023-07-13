import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('inputRef', { static: false })
  inputRef!: ElementRef<HTMLInputElement>;

  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
  });

  constructor(private router: Router, private elementRef: ElementRef) {}

  onSubmit() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchForm.value.searchQuery },
    });

    //Removes Focus
    this.inputRef.nativeElement.blur();

    this.searchForm.reset();
  }
}
