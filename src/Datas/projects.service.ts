import {Injectable} from '@angular/core';
import {Projects} from '@src/Datas/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = new Array<Projects>(
    {id: 'dkshcaskhvfkhas',
  projectName: '1234',
  userName: 'gunel',
  title: 'Lorem',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Diam volutpat commodo sed egestas egestas fringilla phasellus. Quam quisque id diam vel quam elementum pulvinar etiam. Sit amet consectetur adipiscing elit. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Vitae et leo duis ut diam quam nulla. Sed nisi lacus sed viverra tellus in. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aliquam nulla facilisi cras fermentum odio eu. In vitae turpis massa sed elementum tempus. Porttitor leo a diam sollicitudin tempor id eu.'
},
{
  id: 'gdvksbvksabfkskjfh',
  projectName: '1234',
  userName: 'gunel',
  title: 'Planet',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Metus aliquam eleifend mi in nulla. Sed nisi lacus sed viverra tellus in hac habitasse. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Bibendum neque egestas congue quisque egestas diam in arcu. Nec dui nunc mattis enim ut tellus elementum sagittis. Quam viverra orci sagittis eu volutpat odio facilisis. Leo vel fringilla est ullamcorper eget nulla facilisi. Morbi non arcu risus quis varius quam. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Arcu ac tortor dignissim convallis aenean et tortor at risus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.\n\nIn dictum non consectetur a erat nam at lectus urna. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nec nam aliquam sem et tortor consequat id porta. Vulputate sapien nec sagittis aliquam. Lorem ipsum dolor sit amet consectetur. Elit pellentesque habitant morbi tristique. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Quam viverra orci sagittis eu volutpat odio. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Morbi tristique senectus et netus et malesuada fames ac turpis. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Commodo ullamcorper a lacus vestibulum. Orci porta non pulvinar neque laoreet suspendisse interdum.\n\nFeugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Gravida quis blandit turpis cursus in hac habitasse. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Augue ut lectus arcu bibendum at varius vel pharetra vel. Nulla facilisi cras fermentum odio eu feugiat. Cursus sit amet dictum sit amet justo donec enim. Vestibulum sed arcu non odio. Blandit cursus risus at ultrices mi. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Lectus nulla at volutpat diam ut venenatis. Sit amet consectetur adipiscing elit ut aliquam. Iaculis nunc sed augue lacus viverra vitae congue. Amet venenatis urna cursus eget nunc. Sagittis id consectetur purus ut faucibus pulvinar elementum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Tincidunt nunc pulvinar sapien et ligula.'
},
{
  id: '1234dfghjkl',
  projectName: '1234',
  userName: 'gunelruzigar',
  title: 'Mercury',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Massa tincidunt nunc pulvinar sapien et. Dui ut ornare lectus sit amet est.'
},
    {
      id: 'savdxdbascb',
      projectName: '12345',
      userName: 'sebine',
      title: 'dfgthy',
      text: 'dfghbj'
    },
    {
      id: '9aca068e-5d88-41cb-91d2-890ef1bb7de9',
      projectName: '3',
      userName: 'sebine',
      title: 'sdfg',
      text: 'asdfcgvh'
    },
    {
      id: '230b2fa6-d869-46fe-849b-5adc1584cae5',
      projectName: '3',
      userName: 'sebine',
      title: 'zxsdcfgh',
      text: 'ASdfxgcvh'
    },
    {
      id: '2bd56d23-03b6-4b1e-b30a-4d1a71e5d393',
      projectName: '1569',
      userName: 'sebine',
      title: 'xzcvfgvhj',
      text: 'zdxfgchjkl'
    },
    {
      id: 'a9bb2b52-9bb7-4491-8be7-351e158fce8c',
      projectName: '1569',
      userName: 'sebine',
      title: 'sdfghj',
      text: 'sdfghjk'
    },
    {
      id: '12963fdf-d3f2-40c1-8fed-5209f62772a7',
      projectName: '1569',
      userName: 'sebine',
      title: 'sadfgh',
      text: 'sadfgtyu'
    },
    {
      id: 'ae00346d-1a1c-42b9-861c-dba60b77eeca',
      projectName: '123455',
      userName: 'sebine',
      title: 'asdfgh',
      text: 'ASZEDRTFYGHU'
    },
    {
      id: '8246b84e-3ae1-4a8e-b047-17ac12c45890',
      projectName: '1569dsfgh',
      userName: 'sebine',
      title: 'xfdgh',
      text: 'sdfxgch'
    },
    {
      id: 'dda5142b-e46a-4612-bd25-45e15f25dd91',
      projectName: '1235',
      userName: 'gunel',
      title: 'asdefgb',
      text: 'sadfgb'
    },
    {
      id: 'd8013106-5f1a-47e2-8e3a-999acded4cc5',
      projectName: '1456',
      userName: 'gunel',
      title: 'Hello',
      text: 'World'
    });
  getProjects(): Array<Projects>{
    return this.projects;
  }
  setProjects(id, projectName, userName, title, text){
    this.projects.push({id, projectName, userName, title, text});
  }
}

