import angular from 'angular';

export class FooterComponent {}

export default angular.module('app.common.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterComponent
  })
  .name;
