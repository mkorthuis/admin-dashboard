
class WorkflowDetailController {
  $http;
  $stateParams;

  workflowEntry;

  /* @ngInject */
  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$http.get('/api/workflow/' + this.$stateParams.id)
      .then(response => {
        this.workflowEntry = response.data;
      });
  }
}

export default WorkflowDetailController;
