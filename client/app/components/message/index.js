import angular from 'angular';
import component from './message.component';
import uiRouter from 'angular-ui-router';
import routing from './message.routes';
import messageTemplate from './template/index';
import messageWorkflow from './workflow/index';

const module = angular
  .module('app.components.message', [uiRouter, messageTemplate, messageWorkflow])
  .config(routing)
  .component('message', component)
  .name;

export default module;
