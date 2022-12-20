import { Component } from '@angular/core';
import { DetailedResult } from '../DetailedResult';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent {

  detailedResult: DetailedResult = [
    ['Rubrik', 'Värde'],
    ['Field 1', 'Value 1'], 
    ['Field 2', 'Value 2'],
    ['Field 3', 'Value 3'],
    ['Field 4', 'Value 4'],
    ['Field 5', 'Value 5'],
    ['Field 6', 'Value 6']   
  ];

}
