import angular from 'angular';
import listComponent from './workflow.list.component';
import detailComponent from './workflow.detail.component';
import routing from './workflow.routes';
import uiRouter from 'angular-ui-router';

const module = angular
  .module('app.components.message.workflow', [uiRouter])
  .config(routing)
  .component('workflowList', listComponent)
  .component('workflowDetail', detailComponent)
  .name;

export default module;
