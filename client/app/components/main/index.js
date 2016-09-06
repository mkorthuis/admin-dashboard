import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import component from './main.component';

const module = angular
  .module('app.components.main', [uiRouter])
  .config(routing)
  .component('main', component)
  .name;

export default module;
