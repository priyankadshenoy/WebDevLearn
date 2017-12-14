"use strict";

(function () {
    angular
        .module("TextApp")
        .service('UserService', UserService);

    function UserService($http) {
        var api = this;
        api.findAllUsers = findAllUsers;

        function findAllUsers() {
            return $http.get('/api/user')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
