(function () {
    angular.module("TextApp")
        .config(function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home/home.html',
                    controller: 'indexCtrl',
                    controllerAs: 'model'
                })
        });
})
();