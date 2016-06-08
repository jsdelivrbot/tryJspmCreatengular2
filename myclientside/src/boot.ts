import 'zone.js';
//import 'es6-shim';
import 'reflect-metadata';

//import {Component} from 'jspm_packages/npm/angular2@2.0.0-beta.17/platform/browser.js';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Myapp} from './myapp';


// @Component({
//   selector:'myapp',
//   template:'<h1>hello</h1>'
// })
// export class Main{}

bootstrap(Myapp, [ HTTP_PROVIDERS ]);