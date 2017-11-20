import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PollService {

  constructor(private _http: HttpClient) { }
  loginUser(user){
    return this._http.post('/api/login', user).toPromise();
  }
  getCurrentUser(){
    return this._http.get('/api/current').toPromise();
  }
  createPoll(id, poll){
    return this._http.post('/api/user/'+id, poll).toPromise();
  }
  getAllPolls(){
    return this._http.get('api/surveys').toPromise();
  }
  loggedOut(){
    return this._http.get('/api/logout').toPromise();
  }
  getOnePoll(pId){
    return this._http.get('/api/poll/'+pId).toPromise();
  }
  deletePoll(pId){
    return this._http.delete('/api/poll/'+pId).toPromise();
  }
  vote(number, pId){
    console.log("'/api/poll/'+pId+'/'+number")
    return this._http.put('/api/poll/'+pId+'/'+number).toPromise();
  }

}
