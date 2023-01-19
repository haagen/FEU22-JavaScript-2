import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Dagens datum: {{ theDate | date:"yyyy-MM-dd" }} 
    <br>
    Dagens titel: {{ title }}
    <br>
    Reversed titel: {{ title | reverse }}
    <br>
    <h2>Lorem</h2>
    {{ loremIpsum | truncate:50 }}
  `,
  styles: []
})
export class AppComponent {
  title = 'L13-Pipe';
  theDate = new Date();
  loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque vulputate mauris, vitae tempus mauris ornare in. Morbi sed varius mauris. Nulla a volutpat diam. Aenean fermentum lobortis urna sed fermentum. Vestibulum tincidunt tortor a est sagittis placerat. Fusce tristique metus eu pharetra tristique. Vivamus id quam vel dolor lobortis egestas. Suspendisse condimentum lorem eu enim consectetur placerat.';
}
