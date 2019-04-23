import { Component, Input, Output, EventEmitter } from '@angular/core';

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

postInput: string;
titleInput: string;

@Input() post: Post;
@Output() delete = new EventEmitter<any>();
// removePost = () => {
// this.delete.emit(this.post);
// }

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

//  delPost = (i) => {
//     console.log(i)
//     this.post.splice(i, 1);
//     }
    
};
