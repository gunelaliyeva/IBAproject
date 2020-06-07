import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AppComponent} from '@src/app/app.component';
import {ProjectsService} from '@src/Datas/projects.service';
import {Projects} from '@src/Datas/projects';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, DoCheck, OnDestroy {
  projects; // all projects
  getProjects = []; // choosen projects
  index; // index of choosen user number
  number; // for find index
  num; // index of choosen project
  length = -1;
  sec = 0;
  i = 0;
  userName = this.datas.userName;
  serviceProjects: Array<Projects>; // projects from service.ts
  title;
  text;
  findIndex;
  goBack(){
    this.backLocation.back();
  }
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private route: ActivatedRoute, private backLocation: Location, private datas: AppComponent, private mobileProjects: ProjectsService) {
  }

  ngOnInit(): void {
    this.getDatas();
    this.index = this.route.snapshot.params.number;
    this.num = Number(this.route.snapshot.params.num);
    this.serviceProjects = this.mobileProjects.getProjects();
    this.findIndex = this.serviceProjects.findIndex(item => item.id === this.index);
    setTimeout(() => this.sec = 2, 2000);
  }
  ngDoCheck(): void {
    if (this.projects !== undefined && this.length < 0)
    {
      this.projects.forEach(item => {
        if (item.projectName === this.index && item.userName === this.datas.userName){
          this.getProjects.push(item);
          this.length++;
        }
      });
    }
  }
  ngOnDestroy(): void {
  }

  private async getDatas(){
    await this.http.get('http://localhost:3001/projects').subscribe(item => this.projects = item);
  }
}
