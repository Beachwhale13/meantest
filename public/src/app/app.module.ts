import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PollService } from './poll.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PolllistComponent } from './polllist/polllist.component';
import { PolllComponent } from './polll/polll.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolllistComponent,
    PolllComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
