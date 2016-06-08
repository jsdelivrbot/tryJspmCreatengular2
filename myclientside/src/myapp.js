import { Component, Injectable} from 'jspm_packages/npm/angular2@2.0.0-beta.17/core';

import { Http} from 'angular2/http';

@Component({
  selector: 'myapp',
  template: `<h1>hhhhhh</h1>
  <button (click)="showAll()">show it</button>
  <ul>
     <li *ngFor="#item of users" (click)="selectShow(item)">{{item.url}}</li>
  </ul>
  <table>
    <tr>
      <td>
      username
      </td>
      <td>
      url
      </td>
    </tr>
    <tr>
      <td>
      {{onePerson.login}}
      </td>
      <td>
      {{onePerson.url}}
      </td>
    </tr>
  </table>
  `
  })

@Injectable()
export class Myapp {
    constructor(_http: Http) {
      this._http = _http;
    }
    users: any;
    showAll() {
      this._http.get('https://api.github.com/users').subscribe(res => this.users = res.json());
    }
    onePerson: any = [];
    selectShow(ee) {
      this.onePerson = ee;
    }
  }
