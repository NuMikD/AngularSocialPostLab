
import { Component, Input } from '@angular/core';

interface Task {
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
    // completed: boolean=false;
    delete: null;
    @Input() main: boolean;
  
    isRounded: boolean = true;
    isPink: boolean = true; 
    isPadded: boolean = true; 
    isWidths: boolean = true; 
    isflexElem: boolean = true;
    isflexRow: boolean = true;
    isStrike: boolean = false;
    isWide: boolean = true;
    isMargin: boolean = true;
  
    postList: Task[] = [
      {itemTitle: 'New', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}, //completed: false
      {itemTitle: 'old', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Commodo odio. '}  //completed: false
    ];
  filteredTask = [...this.postList];
  
  isCompleted: boolean = false;
  isDeleted: boolean =  false;
  
  classList: Object = {
  pink: this.isPink,
  round: this.isRounded,
  padding: this.isPadded,
  widths: this.isWidths,
  flexing: this.isflexElem,
  flexrow: this.isflexRow,
  strike: this.isStrike,
  componentWidths: this.isWide,
  componentMargins: this.isMargin
  };
  
  submitted = () => {
      const newPost = {
        itemTitle: this.titleInput,
        item: this.postInput,
        completed: this.isCompleted,
        delete: this.isDeleted
      };
      this.postList.push(newPost);
      this.postInput = null;
      this.titleInput = null;
      this.filter(this.searchPost);
   }
  
  toggleMain = () => {
    this.main = !this.main;
 };

  // completeTask = (i: number)=>{
  //     this.postList[i]['completed'] = !this.postList[i]['completed'];
  // }
  
  // undoComplete = (i) => {
  //   if(this.postList[i]['completed'] === true){
  //     this.postList[i]['completed'] = !this.postList[i]['completed'];
  //   }
  // }
  
  filter = (searchPost: string) => {
    const searchString = searchPost ? searchPost.toLowerCase() : '';
    this.filteredTask = this.postList.filter(i => i.item.toLowerCase().includes(searchString));
  }
  
  delPost = (i) => {
    this.postList.splice(i, 1);
    this.filter(this.searchPost)
    }
    
  }
