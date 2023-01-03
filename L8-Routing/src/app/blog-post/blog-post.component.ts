import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../Blog';
import { BlogapiService } from '../blogapi.service';

@Component({
  selector: 'app-blog-post',
  template: `
  <div *ngIf="blogPost != null">
    <h1>{{blogPost.subject}}</h1>
    Author: {{ blogPost.author}}<br>
    Date: {{ blogPost.date }}<br>
    <br>
    <p>
      {{ blogPost.content }}
    </p>
  </div>
  `,
  styles: [
  ]
})
export class BlogPostComponent implements OnInit {

  id: number = 0;
  blogPost: Blog | null = null;


  constructor(private _activatedRoute: ActivatedRoute, private _blogApi: BlogapiService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {    // this._activatedRoute.params is an observable
      this.id = param['id'];                              // Update instace variable id with the id from the URL
      this.blogPost = this._blogApi.getBlogPostById(this.id);
    });
  }


}
