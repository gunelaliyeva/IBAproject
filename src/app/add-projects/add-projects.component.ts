import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppComponent} from '../app.component';
import {v4 as uuid} from 'uuid';
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
  constructor(private route: ActivatedRoute, private datas: AppComponent) { }

  ngOnInit(): void {
    this.userNumber = this.route.snapshot.params.number;
  }
  ngDoCheck(): void {
    if (this.title !== undefined && this.context !== undefined && this.title !== '' && this.context !== ''){
      this.projectObject = {
        id: uuid(),
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
