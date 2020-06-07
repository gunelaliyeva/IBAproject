import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '@src/app/app.component';
import {ProjectsService} from '@src/Datas/projects.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit, DoCheck {
  context; title;
  userNumber;
  userName = this.datas.userName;
  projectObject;
  isComplete = false;
  generateID(){
    return `${Math.random()}${Date.now()}`;
  }
  onTap(){
    this.projectsService.setProjects(this.generateID(), this.userNumber, this.userName, this.title, this.context);
    console.log(this.userNumber, this.userName, this.title);
  }
  onsubmit(){
    try {
      fetch(`http://localhost:3001/projects`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.projectObject)
      });
    }
    catch (e) {
      console.log(e);
    }
  }
  constructor(private route: ActivatedRoute, private datas: AppComponent, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.userNumber = this.route.snapshot.params.number;
  }
  ngDoCheck(): void {
    if (this.title !== undefined && this.context !== undefined && this.title !== '' && this.context !== ''){
      this.projectObject = {
        id: this.generateID(),
        projectName: this.userNumber,
        userName: this.datas.userName,
        title: this.title,
        text: this.context
      };
      this.isComplete = true;
    }
    else {
      this.isComplete = false;
    }
  }
}
