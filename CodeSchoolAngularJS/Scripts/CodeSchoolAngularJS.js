﻿(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Lorem ipsum dolor sit amet, ' +
                            'consectetur adipiscing elit, ' +
                            'sed do eiusmod tempor incididunt ut ' +
                            'labore et dolore magna aliqua. Ut enim' +
                            'ad minim veniam, quis nostrud exercitation' +
                            'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: [
                {
                    full: '/Content/Images/dodecahedron.gif'
                }
            ],
            canPurchase: true,
            soldOut: false,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Lorem ipsum dolor sit amet, ' + 
                            'consectetur adipiscing elit, ' + 
                            'sed do eiusmod tempor incididunt ut ' +
                            'labore et dolore magna aliqua. Ut enim' +
                            'ad minim veniam, quis nostrud exercitation' +
                            'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: [
                {
                    full: '/Content/Images/pentagonal.gif'
                }
            ],
            canPurchase: false,
            soldOut: false,
        }
    ]
})();
