import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'postForm',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']
})
export class PostFormComponent {
  @Input() postList: Posting;
  @Output() submitted = new EventEmitter<Posting>();


  title = 'My Thoughts';
  postInput: string;
  titleInput: string;

  isRounded: boolean = true;
  isPadded: boolean = true; 
  isWidths: boolean = true; 

  classList: Object = {
    round: this.isRounded,
    padding: this.isPadded,
    widths: this.isWidths,
    };

submit = () => {
    console.log("SUBMIT COMPONENT: Submit function called");
    this.submitted.emit({
        itemTitle: this.titleInput,
        item: this.postInput,
    });
    this.postInput = null;
    this.titleInput = null;
 }

}
export interface Posting {
    itemTitle: string;
    item: string;
}