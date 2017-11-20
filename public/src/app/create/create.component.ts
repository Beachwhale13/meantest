import { Component, OnInit } from '@angular/core';
import { Poll } from './../poll';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newSurvey = new Poll();
  currentUser;

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
        console.log(data)
        this.currentUser = data;
        console.log(this.currentUser)
      }
    })
  }
  submitPoll(){
    console.log(this.newSurvey);
    console.log(this.currentUser._id)
    this._pollService.createPoll(this.currentUser._id, this.newSurvey)
    .then((data:any)=>{
      if(data.errors){
        console.log(data.errors);
      }
      else{
        this._router.navigate(['/dashboard']);
      }
    })
  }
}
