'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('message.workflow-list', {
    url: '/workflow/list',
    template: '<workflow-list></workflow-list>'
  });

  $stateProvider.state('message.workflow-detail', {
    url: '/workflow/detail/:id',
    template: '<workflow-detail></workflow-detail>'
  });
}
