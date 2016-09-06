
export class MainController {
  $http;

  awesomeThings = [];

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
  }
}

export default MainController;
