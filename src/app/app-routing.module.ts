import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

import { WatchListComponent } from './components/watch-list/watch-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupUpPageComponent } from './signup-up-page/signup-up-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupUpPageComponent },
  {
    path: 'list',
    component: WatchListComponent,
  },
  {
    path:'addanime',component:AddMovieComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }