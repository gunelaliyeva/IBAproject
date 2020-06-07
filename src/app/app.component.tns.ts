import {Component, OnInit} from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.tns.html',
})

export class AppComponent implements OnInit{
  userName: any;
  isAuthApp: boolean;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
}
