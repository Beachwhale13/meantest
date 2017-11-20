import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-polllist',
  templateUrl: './polllist.component.html',
  styleUrls: ['./polllist.component.css']
})
export class PolllistComponent implements OnInit {
  currentUser;
  polls: Poll[];
  showPolls: Poll[];
  searchPoll: string='';

  constructor(
    private _pollService: PollService,
    private _router: Router
  ) { }

  ngOnInit() {

    this._pollService.getCurrentUser()
    .then((data:any)=>{
      if(data.errors){
        this._router.navigate(['']);
      }
      else{
        this.currentUser = data;
        console.log(this.currentUser)
      }
    });
    this.allPolls()
  }

  allPolls(){
    this._pollService.getAllPolls()
    .then((data:any)=>{
      if(data.errors){
      }
      else{
        console.log(data);
        this.polls = data;
        this.showPolls= data;
      }
    })
  }
  logout(){
    this._pollService.loggedOut()
    this._router.navigate([''])
  }
  searchPolls(){
    this.showPolls = this.polls.filter((poll)=>{
      return poll.question.includes(this.searchPoll);
    })
  }
  deletePoll(pId){
    this._pollService.deletePoll(pId)
    .then((data)=>{
      this.allPolls();
    })
  }

}
