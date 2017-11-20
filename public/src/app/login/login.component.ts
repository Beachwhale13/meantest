import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object = {name:''};
  constructor(
    private _pollService:PollService,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  login(){
    this._pollService.loginUser(this.user)
    .then((data:any)=>{
      console.log("loggingin")
      if(data.errors){
        console.log(data.errors);
      }
      else{
        this._router.navigate(['/dashboard']);
      }
    })
  }
}
