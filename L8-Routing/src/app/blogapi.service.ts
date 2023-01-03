import { Injectable } from '@angular/core';

import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogapiService {

  allPost: Blog[] =  [
    { id: 1, subject: 'The best dog breed', date: new Date(), author: 'Martin Haagen', content: 'They just are!' },
    { id: 2, subject: 'The cooles coding languahe', date: new Date(), author: 'Sylvia Bernadotte', content: 'Without any doubt it must be BrainFuck.'},
    { id: 3, subject: 'The cooles car in the world', date: new Date(), author: 'Martin', content: 'Must be a Defender 110 or a Samurai!'},
    { id: 4, subject: 'The nicest color', date: new Date(), author: 'Sylvia Bernadotte', content: 'I lover grey'},
    { id: 5, subject: 'The tastiest candy', date: new Date(), author: 'Hans Persson', content: 'Chease Doodles'}
  ];

  constructor() { }

  getBlogPosts() {
    return this.allPost;
  }

  getBlogPostById(id: number) {
    let posts = this.allPost.filter( p => p.id == id);
    if (posts.length > 0) {
      return posts[0];    // Returns a Blog if found
    }
    return null;          // Otherwise null if nothing is found
  }

}
