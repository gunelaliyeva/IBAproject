import { Component, OnInit } from '@angular/core';
import {PlatformLocation} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IBA-project';
  isAuthApp = false;
  public userName = '';
  public userNumber = '';
  info;
  onClick(){
    this.isAuthApp = false;
  }
  constructor(private location: PlatformLocation) {
    this.location.onPopState(() => history.forward());
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

  }
}
