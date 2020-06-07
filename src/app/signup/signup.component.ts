import { Component, OnInit, DoCheck } from '@angular/core';
// @ts-ignore
import {AppComponent} from '@src/app/app.component';
import {HttpClient} from '@angular/common/http';
import {Users} from '@src/Datas/users';
import {UsersService} from '@src/Datas/users.service';

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
  id = this.generateID();
  usersInfo: Array<Users>;
  generateID(){
    return `${Math.random()}${Date.now()}`;
  }
  defineFailText(){
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
      this.datas.isAuthApp = true;
      this.datas.userName = this.name;
    }
  }
  onTap(){
    this.defineFailText();
    if (this.checked) {
      this.usersService.setUsers(this.id, this.name, this.fullname, this.password);}
    this.password = '';
    this.fullname = '';
  }
  onSubmit(){
    this.defineFailText();
    if (this.checked){
      // tslint:disable-next-line:max-line-length
      this.datas.userNumber = this.id;
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
    }
    this.password = '';
    this.fullname = '';
  }
  constructor(private datas: AppComponent, private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getData();
    this.usersInfo = this.usersService.getUsers();
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
    if (this.name !== undefined && this.fullname !== undefined && this.password !== undefined){
      // tslint:disable-next-line:max-line-length
      this.checked = this.usersInfo.findIndex(item => item.userName === this.name) < 0 && this.name.length > 3 && this.password.length > 3 && this.fullname.length > 3;
    }
  }
  private async getData(){
    await this.http.get('http://localhost:3001/users').subscribe(item => this.users.push(item));
    setTimeout(() => this.users = this.users[0], 1000);
  }
}
