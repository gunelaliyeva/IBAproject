import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import {LoginComponent} from '@src/app/login/login.component';
import {SignupComponent} from '@src/app/signup/signup.component';
import {SearchPageComponent} from '@src/app/search-page/search-page.component';
import {DetailsComponent} from '@src/app/details/details.component';
import {ListComponent} from '@src/app/list/list.component';
import {AddProjectsComponent} from '@src/app/add-projects/add-projects.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'search/:name',
    component: SearchPageComponent
  },
  {
    path: 'list/:number',
    component: ListComponent
  },
  {
    path: 'details/:number',
    component: DetailsComponent
  },
  {
    path: 'add-project/:number',
    component: AddProjectsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
