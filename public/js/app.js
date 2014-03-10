'use strict';

var productEditor = angular.module('productEditor', ['ngResource'])
    .controller('HomeCtrl', ['$scope', 'productFactory', function($scope, productFactory) {
        $scope.products = productFactory.query();

        $scope.editing = {};

        $scope.addUpdateProduct = function() {
            var product = $scope.currentProduct;

            if(product) {
                product.name = $scope.editing.name;
            } else {
                $scope.products.push({ name: $scope.editing.name });
            }
        };

        $scope.listChange = function() {
            if($scope.currentProduct) {
                $scope.editing.name = $scope.currentProduct.name;
            } else {
                $scope.editing = {};
            }
        }
    }])
    .factory('productFactory', function($resource) {
            return $resource('/catalog/public/products/:productId', { productId: '@id' }
        );
    });
