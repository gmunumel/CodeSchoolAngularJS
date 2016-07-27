(function () {
    var app = angular.module('store-products', []);

    app.directive('productDetails', function () {
        return {
            restrict: 'E',
            templateUrl: '/Home/ProductDetails'
        };
    });

    app.directive('productDescriptions', function () {
        return {
            restrict: 'E',
            templateUrl: '/Home/ProductDescriptions'
        };
    });

    app.directive('productSpecs', function () {
        return {
            restrict: 'A',
            templateUrl: '/Home/ProductSpecs'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: '/Home/ProductReviews',
            controller: function () {
                this.review = {};

                this.addReview = function (product) {
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: '/Home/ProductTabs',
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: '/Home/ProductGallery',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

})();
