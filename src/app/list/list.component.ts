import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Projects} from '@src/Datas/projects';
import {ProjectsService} from '@src/Datas/projects.service';
import {AppComponent} from '@src/app/app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  number;
  projects: Array<Projects>;
  userName = this.datas.userName;
  constructor(private route: ActivatedRoute, private getProjects: ProjectsService, private datas: AppComponent) { }

  ngOnInit(): void {
    this.number = this.route.snapshot.params.number;
    this.projects = this.getProjects.getProjects();
  }

}
