import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomePageComponent } from '@src/app/home-page/home-page.component';
import { LoginComponent } from '@src/app/login/login.component';
import { SignupComponent } from '@src/app/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPageComponent } from '@src/app/search-page/search-page.component';
import { NotFoundComponent } from '@src/app/not-found/not-found.component';
import { DetailsComponent } from '@src/app/details/details.component';
import { AddProjectsComponent } from '@src/app/add-projects/add-projects.component';
import { ListComponent } from '@src/app/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    SearchPageComponent,
    NotFoundComponent,
    DetailsComponent,
    AddProjectsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
