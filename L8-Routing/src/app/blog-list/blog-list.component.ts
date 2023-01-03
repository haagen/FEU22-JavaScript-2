import { Component, OnInit } from '@angular/core';

import { BlogapiService } from '../blogapi.service';
import { Blog } from '../Blog';

@Component({
  selector: 'app-blog-list',
  template: `
    <ul>
      <li *ngFor="let post of blogPost"><a [routerLink]="['/blog', post.id]">{{ post.subject }}</a><li>
    </ul>
  `,
  styles: [
  ]
})
export class BlogListComponent implements OnInit {

  blogPost: Blog[] = [];

  constructor(private _blogApi : BlogapiService) { }

  ngOnInit(): void {
    this.blogPost = this._blogApi.getBlogPosts();
  }

}
