import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module.tns';
import { AppComponent } from '@src/app/app.component';
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import {LoginComponent} from '@src/app/login/login.component';
import { SignupComponent } from '@src/app/signup/signup.component';
import { SearchPageComponent } from '@src/app/search-page/search-page.component';
import { DetailsComponent } from '@src/app/details/details.component';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ListComponent } from '@src/app/list/list.component';
import { AddProjectsComponent } from '@src/app/add-projects/add-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchPageComponent,
    DetailsComponent,
    ListComponent,
    AddProjectsComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
