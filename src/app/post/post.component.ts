import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

postInput: string;
titleInput: string;

@Input() postList: Posting;
@Output() delete = new EventEmitter<any>();


isRounded: boolean = true;
isPadded: boolean = true; 
isWidths: boolean = true; 
isflexElem: boolean = true;
isflexRow: boolean = true;
isStrike: boolean = false;
isWide: boolean = true;
isMargin: boolean = true;
// delete: boolean = null;

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

 erasePost = () => {
    console.log()
    this.delete.emit(this.postList);
    }
    
};

export interface Posting {
  itemTitle: string;
  item: string;
  }
