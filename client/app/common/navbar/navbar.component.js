'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  },
  {
    title: 'Patient',
    state: 'patient'
  },
  {
    title: 'Provider',
    state: 'provider'
  },
  {
    title: 'Messages',
    state: 'message'
  }];
  isCollapsed = true;

}

export default angular.module('app.common.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
