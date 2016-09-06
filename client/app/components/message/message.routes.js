'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('message', {
    url: '/message',
    template: '<message></message>'
  });
}
