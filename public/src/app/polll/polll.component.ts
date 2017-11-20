import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-polll',
  templateUrl: './polll.component.html',
  styleUrls: ['./polll.component.css']
})
export class PolllComponent implements OnInit {
pId: String = '';
currentUser;
poll = new Poll();

  constructor(
    private _pollService: PollService,
    private _router: Router,
    private _route: ActivatedRoute
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
    this._route.paramMap.subscribe(params =>{
      this.pId = params.get('id');
      // console.log(this.qId);
    });
    this._pollService.getOnePoll(this.pId)
    .then((data:any)=>{
      if(data.errors){
        this._router.navigate(['']);
      }
      else{
        this.poll = data;
      }
    })
  },
  increaseVote(number, pId){
    this._pollService.vote(number, pId)
    .then((data)=>{
      this._pollService.getOnePoll(pId)
      .then((data)=>{
        this.poll = data;
      })
      .catch((err)=>{
        console.log("catch", err);
      })
    })
  }

}
