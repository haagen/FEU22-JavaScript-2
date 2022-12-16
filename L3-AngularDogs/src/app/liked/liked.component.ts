import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent {

  @Input() isLiked: boolean = false;

  onClick(likeThisDog: boolean) {
    this.isLiked = likeThisDog;
  }

}
