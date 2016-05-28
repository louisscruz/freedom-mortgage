/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {Navbar} from './navbar/navbar';
import {Home} from './home/home';
import {Apply} from './apply/apply';
import {FooterContent} from './footer-content/footer-content';

import {RouterActive} from './directives/router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [],
  directives: [Navbar, FooterContent, RouterActive],
  pipes: [],
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,
  template: `
    <header>
      <navbar></navbar>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <footer-content></footer-content>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index', useAsDefault: true },
  { path: '/home', component: Home, name: 'Home' },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {
    path: '/about',
    name: 'About',
    loader: () => require('es6-promise!./about/about')('About')
  }, {
    path: '/contact',
    name: 'Contact',
    loader: () => require('es6-promise!./contact/contact')('Contact')
  }, {
    path: '/apply',
    name: 'Apply',
    component: Apply
  }
])
export class App {
  private reviews: Array<string> = ['test'];

  constructor() {}
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
