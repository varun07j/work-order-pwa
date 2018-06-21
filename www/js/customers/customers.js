angular.module('app.customers', [
  'ui.router',
  'kinvey'
])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state({
    parent: 'navbar',
    name: 'customers',
    url: '/customers',
    templateUrl: 'js/customers/customers.html',
    controller: 'CustomersCtrl',
    requiresActiveUser: true
  });
}])
.controller('CustomersCtrl', ['$scope', '$kinvey', function($scope, $kinvey) {
  $scope.find = function() {
    var store = $kinvey.DataStore.collection('Customers');
    store.find()
      .subscribe(function(customers) {
        $scope.customers = customers;
        $scope.$digest();
      }, function(error) {
        console.log(error);
      });
  }

  $scope.find();
}]);
