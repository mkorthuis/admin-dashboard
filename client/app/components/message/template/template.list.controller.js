
class TemplateListController {
  $http;

  templateList = [];

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/template')
      .then(response => {
        this.templateList = response.data;
      });
  }
}

export default TemplateListController;
