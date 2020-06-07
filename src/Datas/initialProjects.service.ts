import {Injectable} from '@angular/core';
import {InitialProjects} from '@src/Datas/initialProjects';

@Injectable({
  providedIn: 'root'
})
export class InitialProjectsService {
  private initialProjects = new Array<InitialProjects>(
    {
    id: '1235',
  userNumber: '1235',
  userName: 'gunel'
},
{
  id: '1234',
  userNumber: '1234',
  userName: 'gunelruzigar'
},
{
  id: '1234567',
  userNumber: '1234567',
  userName: 'nermin'
},
{
  id: '1569',
  userNumber: '1569',
  userName: 'sebine'
},
{
  id: 'MyData',
  userNumber: 'MyData',
  userName: 'Novruz'
},
{
  id: 'second',
  userNumber: 'second',
  userName: 'Aliyev'
},
{
  id: 'third',
  userNumber: 'third',
  userName: 'Aliyev'
},
{
  id: '123455',
  userNumber: '123455',
  userName: 'sebine'
},
{
  id: '1456',
  userNumber: '1456',
  userName: 'gunel'
}
  );
  getInitialProjects(): Array<InitialProjects>{
    return this.initialProjects;
  }
  setInitialProjects(id, userNumber, userName){
    this.initialProjects.push({id, userNumber, userName});
  }
}

