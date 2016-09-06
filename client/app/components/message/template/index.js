import angular from 'angular';
import listComponent from './template.list.component';
import detailComponent from './template.detail.component';
import routing from './template.routes';
import uiRouter from 'angular-ui-router';

const module = angular
  .module('app.components.message.template', [uiRouter])
  .config(routing)
  .component('templateList', listComponent)
  .component('templateDetail', detailComponent)
  .name;

export default module;
