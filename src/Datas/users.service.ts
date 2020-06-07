import {Injectable} from '@angular/core';
import {Users} from '@src/Datas/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private users = new Array<Users>({ id: '1', userName: 'gunel', password: 'gunel', fullName: 'gunel'},
    {id: '2', userName: 'nermin', fullName: 'nermin', password: 'nermin'},
    {id: '3', userName: 'sebine', fullName: 'sebine', password: 'sebine'});
  getUsers(): Array<Users>{
    return this.users;
  }
  setUsers(id, userName, fullName, password){
    this.users.push({id, userName, password, fullName});
  }
}
/*
{ id: '1', userName: 'gunel', password: 'gunel', fullName: 'gunel'},
    {id: '2', userName: 'nermin', fullName: 'nermin', password: 'nermin'},
    {id: '3', userName: 'sebine', fullName: 'sebine', password: 'sebine'}
 */

