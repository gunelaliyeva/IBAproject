import { Component, OnInit, DoCheck } from '@angular/core';
import {AppComponent} from '../app.component';
import { v4 as uuid } from 'uuid';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, DoCheck {
  index = -1;
  name = '';
  fullname;
  password;
  checked = false;
  failText;
  users = [];
  url = '/signUp';
  id = uuid();
  onSubmit(){
    if (this.name === undefined || this.name.length < 4)
    {
      this.failText = 'invalid username';
    }

    if (this.password === undefined || this.password.length < 4)
    {
      this.failText = 'invalid password';
    }

    if (this.fullname === undefined || this.fullname.length < 4)
    {
      this.failText = 'invalid fullname';
    }
    this.checked ? this.failText = '' : this.failText = 'this username already exist';

    if (this.checked){
      // tslint:disable-next-line:max-line-length
     fetch('http://localhost:3001/users', {
       method: 'POST',
       headers: {
         // tslint:disable-next-line:max-line-length
         'Content-Type': 'application/json'}, body: JSON.stringify({
         id: this.id ,
         userName: this.name,
         fullName: this.fullname,
         password: this.password} )
     }).then(response => response.json()).catch(error => console.log('Error', error));
     this.datas.isAuthApp = true;
     this.datas.userName = this.name;
     this.datas.userNumber = this.id;
    }
    this.password = '';
    this.fullname = '';
  }
  constructor(private datas: AppComponent, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  ngDoCheck(): void {
    this.checked ? this.url = '/search/' + this.name : this.url = '/signUp';
    if (this.users !== undefined)
    {
      if (this.name !== undefined && this.fullname !== undefined && this.password !== undefined) {
        // tslint:disable-next-line:max-line-length
        this.checked = this.users.findIndex(item => item.userName === this.name) < 0 && this.name.length > 3 && this.password.length > 3 && this.fullname.length > 3;
      }
    }
    else {
      this.failText = 'Please start from home page';
    }
  }

  private async getData(){
    await this.http.get('http://localhost:3001/users').subscribe(item => this.users.push(item));
    setTimeout(() => this.users = this.users[0], 1000);
  }
}
