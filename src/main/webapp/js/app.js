angular.module('shortener', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
            $stateProvider

                .state('inicio', {
                    url: "/inicio",
                    templateUrl: "templates/main/inicio.html",
                    controller: "MainCtrl"
                });
            $urlRouterProvider.otherwise('inicio')
        })

    /*.factory('todos', [function(){
        var o = {
            todos: []
        };
        return o;
    }])*/

    .controller('MainCtrl', [ '$scope', function($scope){
        //TEST
        $scope.noresult = true;

        $scope.shortenURL = function(){
            $scope.shorturl = 'http://pista.cho/OPHASHING';
            $scope.noresult = false;
        }

        $scope.ShortURLtoQR = function(){

        }

        $scope.CSVtoShortURL = function(){
            console.log($scope.form_csv);
        }
    }])
    
    .directive('footer',function(){
    	return{
    		restrict: 'E',
    		templateUrl: 'templates/components/footer.html'
    	
    	}
    });