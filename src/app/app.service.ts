import { Injectable } from '@angular/core';

export interface Userinfo {
  userName: string;
  password: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor() { }
}
