import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Dagens datum: {{ theDate | date:"yyyy-MM-dd" }} 
    <br>
    Dagens titel: {{ title }}
    <br>
    Reversed titel: {{ title | reverse }}
  `,
  styles: []
})
export class AppComponent {
  title = 'L13-Pipe';
  theDate = new Date();
}
