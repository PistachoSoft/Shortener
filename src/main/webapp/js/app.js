angular.module('shortener', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
            $stateProvider

                .state('inicio', {
                    url: "/inicio",
                    templateUrl: "templates/inicio.html",
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
       
    }])
    
    .directive('footer',function(){
    	return{
    		restrict: 'E',
    		templateUrl: 'templates/footer.html'
    	
    	}
    });