'use strict';

var productEditor = angular.module('productEditor', ['ngResource'])
    .controller('HomeCtrl', ['$scope', 'productFactory', function($scope, productFactory) {
        $scope.products = productFactory.query();
        $scope.editing = {};

        $scope.addUpdateProduct = function() {
            var product = $scope.currentProduct;

            if(product) {
                product.name = $scope.editing.name;
                product.width = $scope.editing.width;
                product.length = $scope.editing.length;
                product.height = $scope.editing.height;
                product.weight = $scope.editing.weight;
                product.usd_value = $scope.editing.usd_value;
                product.description = $scope.editing.description;
            } else {
                $scope.products.push({
                    name: $scope.editing.name,
                    width: $scope.editing.width,
                    length: $scope.editing.length,
                    height: $scope.editing.height,
                    weight: $scope.editing.weight,
                    usd_value: $scope.editing.usd_value,
                    description: $scope.editing.description
                });
            }
        };

        $scope.listChange = function() {
            if($scope.currentProduct) {
                $scope.editing.name = $scope.currentProduct.name;
                $scope.editing.width = $scope.currentProduct.width;
                $scope.editing.length = $scope.currentProduct.length;
                $scope.editing.height = $scope.currentProduct.height;
                $scope.editing.weight = $scope.currentProduct.weight;
                $scope.editing.usd_value = $scope.currentProduct.usd_value;
                $scope.editing.description = $scope.currentProduct.description;
            } else {
                $scope.editing = {};
            }
        }
    }])
    .factory('productFactory', function($resource) {
            return $resource('/catalog/public/products/:productId', { productId: '@id' }
        );
    });
