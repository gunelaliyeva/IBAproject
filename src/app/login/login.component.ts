import { Component, OnInit, DoCheck } from '@angular/core';
// @ts-ignore
import {AppComponent} from '@src/app/app.component';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '@src/Datas/users.service';
import {Users} from '@src/Datas/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {
  name; password;
  users = [];
  failText;
  checked = false;
  url = '';
  usernumber;
  usersInfo: Array<Users>;
  deneme;
  onSubmit(){
    this.password = '';
    if (!this.checked)
    {
      this.failText = 'Username or password is wrong';
    }
    if (this.checked){
      this.datas.isAuthApp = true;
      this.datas.userName = this.name;
      this.datas.userNumber = this.usernumber;
      console.log(this.datas.isAuthApp);
    }
  }
  constructor(private http: HttpClient, private datas: AppComponent, private usersService: UsersService) { }
  ngOnInit(): void {
    this.getDatas();
    this.usersInfo = this.usersService.getUsers();
  }
  ngDoCheck(): void {
    if (this.users !== undefined) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].userName === this.name && this.users[i].password === this.password) {
          this.checked = true;
          this.url = '/search/' + this.name;
          this.usernumber = this.users[i].id;
          break;
        } else {
          this.checked = false;
          this.url = '';
        }
      }
    }
    if (this.usersInfo !== undefined){
     for (const iterator of this.usersInfo){
       if (iterator.userName === this.name && iterator.password === this.password) {
         this.checked = true;
         this.url = '/search/' + this.name;
         this.usernumber = iterator.id;
         break;
       } else {
         this.checked = false;
         this.url = '';
       }
     }
    }
  }
  private async getDatas(){
    await this.http.get('http://localhost:3001/users').subscribe(item => this.users.push(item));
    setTimeout( () => this.users = this.users[0], 1000);
  }
}
