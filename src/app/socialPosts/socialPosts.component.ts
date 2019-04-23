import { Component, Input } from '@angular/core';
// import { SubmittedEventArgs } from '../postForm/postForm.component';
interface Post {
    itemTitle: string;
    item: string;
    // completed: boolean;
    // deleted: boolean;
  }

@Component({
    selector: 'socialPosts-root',
    templateUrl: './socialPosts.component.html',
    styleUrls: ['./socialPosts.component.css']
})
export class SocialPostsComponent {
    title = 'My Thoughts';
    postInput: string;
    titleInput: string;
    searchPost: string;
    delete: null;
    @Input() main: boolean;
  
    isRounded: boolean = true;
    isPadded: boolean = true; 
    isWidths: boolean = true; 
    isflexElem: boolean = true;
    isflexRow: boolean = true;
    isWide: boolean = true;
    isMargin: boolean = true;

    oldpost = {itemTitle: 'Love', item: 'Love is what love does, love is lauren'}
    postList: Post[] = [
      this.oldpost,
      {itemTitle: 'New', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}, //completed: false
      {itemTitle: 'old', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}  //completed: false
    ];

onSubmitEvent(eventArgs){
  console.log("APP COMPONENT: On Submit event fired", eventArgs);
  this.postList.push(eventArgs);
} 
  
  isCompleted: boolean = false;
  isDeleted: boolean =  false;
  
  classList: Object = {
  round: this.isRounded,
  padding: this.isPadded,
  widths: this.isWidths,
  flexing: this.isflexElem,
  flexrow: this.isflexRow,
  componentWidths: this.isWide,
  componentMargins: this.isMargin
  };
  
  toggleMain = () => {
    this.main = !this.main;
 };

  
  delPost = (i) => {
    console.log(i)
    this.postList.splice(i, 1);
    }
    
  }
