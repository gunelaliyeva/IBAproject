import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DetailsComponent} from './details/details.component';
import {AddProjectsComponent} from './add-projects/add-projects.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignupComponent,
  },
  {
    path: 'search/:name',
    component: SearchPageComponent,
  },
  {
    path: 'details/:number/:num',
    component: DetailsComponent
  },
  {
    path: 'add-project/:number/:exist',
    component: AddProjectsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
