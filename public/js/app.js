
angular.module('productEditor', ['ngResource'])
    .controller('HomeCtrl', ['$scope', 'Product', function($scope, Product) {
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
                },
                function(response) {
                    console.log(response.error.type + ': ' + response.error.message);
                });
            }
        };

        $scope.listChange = function() {
            if($scope.currentProduct) {
                $scope.editing = $scope.currentProduct;
            } else {
                $scope.editing = {};
            }
        }
    }])
    .factory('Product', function($resource) {
            return $resource('/catalog/public/products/:productId', { productId: '@id'}
        );
    });
