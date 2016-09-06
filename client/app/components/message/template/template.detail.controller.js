
class TemplateDetailController {
  $http;
  $stateParams;

  templateEntry;

  /* @ngInject */
  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$http.get('/api/template/' + this.$stateParams.id)
      .then(response => {
        this.templateEntry = response.data;
      });
  }
}

export default TemplateDetailController;
