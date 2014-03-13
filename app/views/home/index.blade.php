@extends('layouts.home')

@section('body')
    <div ng-app="productEditor">
        <div ng-controller="HomeCtrl">
            <div style="float:left;">
                <select ng-options="b.name for b in products" ng-model="currentProduct" ng-change="listChange()">
                    <option value="">Choose Product...</option>
                </select>
            </div>

            <div style="float:left;">
                <form>
                    <input type="text" ng-model="editing.name"> Name
                    <br>
                    <input type="text" ng-model="editing.width"> Width
                    <br>
                    <input type="text" ng-model="editing.length"> Length
                    <br>
                    <input type="text" ng-model="editing.height"> Height
                    <br>
                    <input type="text" ng-model="editing.weight"> Weight
                    <br>
                    <input type="text" ng-model="editing.usd_value"> Value (USD)
                    <br><br>
                    Description
                    <br>
                    <textarea style="width:240px; height:90px;" ng-model="editing.description"></textarea>
                    <br>
                    <input type="submit" value="{{ editing.name ? 'Update' : 'Add' }}" ng-click="addUpdateProduct()">
                    <input type="button" value="Delete" ng-show="currentProduct && products.length > 0" ng-click="deleteProduct()">

                </form>
            </div>
        </div>
    </div>
@stop

