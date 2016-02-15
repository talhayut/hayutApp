
//region Main Controller
var MainController = function($scope) {

  //region Initialization
  $scope.database = [
    {
      id: 1,
      email: 'tal.hayut@zerto.com'
    },
    {
      id: 2,
      email: 'evegney.rivkin@zerto.com'
    },
    {
      id: 3,
      email: 'koren.siso@zerto.com'
    }
  ];

  $scope.logger = [
    {
      text: 'App started!',
      date: new Date()
    }
  ];

  $scope.input = undefined;
  //endregion

  //region Remove Function
  $scope.remove = function(item) {

    var database = $scope.database;

    $scope.logger.push({
      text: 'Email: ' + JSON.stringify(item.email) + ' was removed from the database',
      date: new Date()
    });

    database.splice(database.indexOf(item), 1);

  };
  //endregion

  //region Action Button
  $scope.clicked = function() {

    $scope.database.push({
      id: $scope.database.length + 1,
      email: $scope.input
    });

    $scope.logger.push({
      text: 'Email: ' + '"' + $scope.input + '"' + ' was added to the database',
      date: new Date()
    });

    $scope.input = null;
  };
  //endregion

};
//endregion

//region Directives
var Database = function() {
  return {
    restrict:    'E',
    templateUrl: 'templates/database.html'
  }
};

var Logger = function() {
  return {
    restrict:    'E',
    templateUrl: 'templates/logger.html'
  }
};
//endregion

//region Register App
angular.module('loggerApp', [])
  .controller('mainController', MainController)
  .directive('logger', Logger)
  .directive('database', Database);
//endregion