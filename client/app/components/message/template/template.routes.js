'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('message.template-list', {
    url: '/template/list',
    template: '<template-list></template-list>'
  });

  $stateProvider.state('message.template-detail', {
    url: '/template/detail/:id',
    template: '<template-detail></template-detail>'
  });
}
