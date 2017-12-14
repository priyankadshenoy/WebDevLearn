(function()
{
    angular
        .module("TextApp")
        .controller('indexCtrl', indexCtrl);

    function indexCtrl(UserService,
                              $routeParams)
    {
        var model = this;


        function init() {

            // UserService
            //     .findAllUsers()
            //     .then(function (response) {
            //         console.log(response);
            //         model.users = response;
            //     });

            model.users = [
                {"name":"PS", "number":"6177857613"},
                { "name": "SS", "number" : "6178667976"},
                {"name": "BS", "number" : "6177922501"}
            ];

            console.log(model.users)

        }
        init();
    }
})();