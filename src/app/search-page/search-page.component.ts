import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, DoCheck {
  userNumber;
  userName = this.datas.userName;
  text;
  notExist = true;
  sec = 0;
  numbers;
  onClick(){
    if (this.notExist){
      fetch('http://localhost:3001/initialProjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: this.userNumber, userNumber: this.userNumber, userName: this.datas.userName})
      }).then(response => response.json());
    }
  }
  constructor( private route: ActivatedRoute, private http: HttpClient, private datas: AppComponent) { }

  ngOnInit(): void {
    this.text = this.route.snapshot.params;
    this.getDatas();
    setTimeout(() => this.sec = 2, 2000);
  }
  ngDoCheck(): void {
    if (this.numbers !== undefined) {
      this.notExist = this.numbers.findIndex(item => item.id == this.userNumber && item.userName == this.datas.userName) < 0;
    }
  }
  private async getDatas(){
     await this.http.get(`http://localhost:3001/initialProjects`).subscribe(item => this.numbers = item);
  }
}
