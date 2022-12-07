var app = angular.module('myApp2', ['ngSanitize']);
app.directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
        if (val)
          $(element).show();
        else
          $(element).hide();
      });
    }
  }
})

app.controller('SuperCtrl5', function ($scope, $http) {

  setInterval(() => {
    loadcontent2()
  }, 30000);

  //loading
  function loadcontent2() {
    $http.get("https://secure2.playpark.com/milestone/MileStone.ashx?eventId=4")
      .success(function (response) {
        $scope.tools2 = response;
      });
      
      
      
/*      
$scope.tools2 = {
Code: 0,
Result: "Success",
MileStone: 100000,
Goal: 0,
};*/
      
      
}
  loadcontent2()
});
