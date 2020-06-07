import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '@src/app/app.component';
import {InitialProjects} from '@src/Datas/initialProjects';
import {InitialProjectsService} from '@src/Datas/initialProjects.service';

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
  initialProjects: Array<InitialProjects>;
  onTap(){
    if (this.notExist){
      this.initialProjectsService.setInitialProjects(this.userNumber, this.userNumber, this.datas.userName);
    }
  }
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
  // tslint:disable-next-line:max-line-length
  constructor( private route: ActivatedRoute, private http: HttpClient, private datas: AppComponent, private initialProjectsService: InitialProjectsService) { }

  ngOnInit(): void {
    this.text = this.route.snapshot.params;
    this.getDatas();
    setTimeout(() => this.sec = 2, 2000);
    this.initialProjects = this.initialProjectsService.getInitialProjects();
  }
  ngDoCheck(): void {
    if (this.numbers !== undefined) {
      this.notExist = this.numbers.findIndex(item => item.id == this.userNumber && item.userName == this.datas.userName) < 0;
    }
    this.notExist = this.initialProjects.findIndex(item => item.id === this.userNumber && item.userName === this.datas.userName) < 0;
  }
  private async getDatas(){
    await this.http.get(`http://localhost:3001/initialProjects`).subscribe(item => this.numbers = item);
  }
}
