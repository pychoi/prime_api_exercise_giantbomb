var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    var apikey = "e9e619270ab9e6455ac2874ba41196b326378440";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = '"Chuck Norris"';

    var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    $scope.resultsArray = [];

    $http.jsonp(finalURL).then(
        function(response) {
            console.log(response.data.results);
            $scope.resultsArray = response.data.results;
        }
    );


}]);