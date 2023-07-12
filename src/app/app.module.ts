import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    CategoryCardComponent,
    HomeComponent,
    CategoryComponent,
    BreadcrumbsComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
