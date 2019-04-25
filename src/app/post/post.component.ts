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

isflexElem: boolean = true;
isflexRow: boolean = true;

classList: Object = {
  flexing: this.isflexElem,
  flexrow: this.isflexRow
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
