import {
  Component,
  OnInit,
  DoCheck
} from '@angular/core';
import {AppComponent} from '../app.component';
import {HttpClient} from '@angular/common/http';
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
    }
  }
  constructor(private http: HttpClient, private datas: AppComponent) { }
  ngOnInit(): void {
    this.getDatas();
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
  }
  private async getDatas(){
    await this.http.get('http://localhost:3001/users').subscribe(item => this.users.push(item));
    setTimeout( () => this.users = this.users[0], 1000);
  }
}
