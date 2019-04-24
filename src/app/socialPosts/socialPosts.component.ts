import { Component, Input, Output } from '@angular/core';
import { Posting } from '../post/post.component';

interface Post {
    itemTitle: string;
    item: string;
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
    main: boolean = false;
  
    isRounded: boolean = true;
    isPadded: boolean = true; 
    isWidths: boolean = true; 
    isflexElem: boolean = true;
    isflexRow: boolean = true;
    isWide: boolean = true;
    isMargin: boolean = true;

    posted: Post;
    postList: Post[] = [
      {itemTitle: 'Love', item: 'Love is what love does, love is lauren'},
      {itemTitle: 'New', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}, //completed: false
      {itemTitle: 'old', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}  //completed: false
    ];

onSubmitEvent(eventArgs){
  console.log("APP COMPONENT: On Submit event fired", eventArgs);
  this.postList.unshift(eventArgs);
} 
  
  classList: Object = {
  round: this.isRounded,
  padding: this.isPadded,
  widths: this.isWidths,
  flexing: this.isflexElem,
  flexrow: this.isflexRow,
  componentWidths: this.isWide,
  componentMargins: this.isMargin
  };
  
  toggleForm = () => {
    this.main = !this.main;
 };

  
  delPost = (i) => {
    console.log(i)
    this.postList.splice(i, 1);
    }
    
  }
