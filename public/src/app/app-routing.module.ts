import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PolllistComponent } from './polllist/polllist.component';
import { PolllComponent } from './polll/polll.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', pathMatch: 'full', component: PolllistComponent},
  {path: 'poll/:id', pathMatch: 'full', component: PolllComponent},
  {path: 'create', pathMatch:'full', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
