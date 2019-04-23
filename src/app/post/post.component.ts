import { Component, Input } from '@angular/core';

interface Post{
itemTitle: string;
item: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() post:Post;

isRounded: boolean = true;
isPadded: boolean = true; 
isWidths: boolean = true; 
isflexElem: boolean = true;
isflexRow: boolean = true;
isStrike: boolean = false;
isWide: boolean = true;
isMargin: boolean = true;

classList: Object = {
  round: this.isRounded,
  padding: this.isPadded,
  widths: this.isWidths,
  flexing: this.isflexElem,
  flexrow: this.isflexRow,
  strike: this.isStrike,
  componentWidths: this.isWide,
  componentMargins: this.isMargin
 };
};
