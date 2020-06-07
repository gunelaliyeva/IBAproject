import { Component, OnInit } from '@angular/core';
import {PlatformLocation} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IBA-project';
  public isAuthApp = false;
  public userName = '';
  public userNumber = '';
  info;
  public users;
  onClick(){
    this.isAuthApp = false;
  }
  constructor(private location: PlatformLocation, private http: HttpClient) {
    this.location.onPopState(() => history.forward());
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
    fetch('http://localhost:3001/users').then(data => data.json()).then(data => this.users = data);
  }
}
