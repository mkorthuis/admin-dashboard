
class WorkflowListController {
  $http;

  workflowList = [];

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/workflow')
      .then(response => {
        this.workflowList = response.data;
      });
  }
}

export default WorkflowListController;
