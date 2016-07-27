(function () {
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', [ '$http', function ($http) {

        var store = this;

        store.products = [];

        $http.get('/Models/Static/products.json').success(function (data) {
            store.products = data;
        });
    }]);
})();
