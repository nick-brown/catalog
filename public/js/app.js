
angular.module('productEditor', ['ngResource'])
    .controller('HomeCtrl', ['$scope', 'Product', 'errors', function($scope, Product, errors) {
        'use strict';

        $scope.products = Product.query();
        $scope.editing = {};

        $scope.addUpdateProduct = function() {
            if($scope.currentProduct) {
                $scope.currentProduct = $scope.editing;
            } else {
                var newProduct = new Product($scope.editing);

                newProduct.$save().then(function() {
                    $scope.products.push(newProduct);

                    $scope.editing = {};
                }, function(response) {
                    errors.throw(response);
                })
            }
        };

        $scope.listChange = function() {
            if($scope.currentProduct) {
                $scope.editing = $scope.currentProduct;
            } else {
                $scope.editing = {};
            }
        };

        $scope.deleteProduct = function() {
            if($scope.currentProduct) {
                var product = new Product($scope.currentProduct);
                product.$delete().then(function() {
                    var index = $scope.products.indexOf($scope.currentProduct);

                    $scope.products.splice(index, 1);
                    $scope.editing = {};
                }), function(response) {
                    errors.throw(response);
                };
            }
        };
    }])
    .factory('Product', function($resource) {
            return $resource('/catalog/public/products/:productId', { productId: '@id'}
        );
    })
    .service('errors', function() {
        this.throw = function(response) {
            if(response.hasOwnProperty('data') && response.data.hasOwnProperty('error') && response.data.error.hasOwnProperty('type') && response.data.error.hasOwnProperty('message')) {
                throw response.data.error.type + ': ' + response.data.error.message;
            } else {
                throw "Response in incorrect format"
            }
        };
    });
