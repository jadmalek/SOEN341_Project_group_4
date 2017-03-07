(function (angular) {
  angular.module('main').controller('loginCtrl', loginCtrl);
  loginCtrl.$inject = ['$http', '$location'];

  function loginCtrl($http, $location) {
    var vm = this;
    vm.showError = false;

    vm.credentials = {
      username : "",
      password : ""
    };

    vm.onSubmit = function () {
      $http({
        method: 'POST',
        url: '/login',
        data: vm.credentials
      }).then(function success(response) {
        if (response.data.error === undefined) {
          window.location = "/authenticated/";
        } else {
          vm.showError = true;
        }
      }).catch(function error(response) {
        if (response.status !== 200) {
          vm.showError = true;
        }
      });
    };
  }
})(angular);