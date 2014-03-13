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
                    <input type="text" ng-model="editing.name">
                    <br>
                    <input type="text" ng-model="editing.width">
                    <br>
                    <input type="text" ng-model="editing.length">
                    <br>
                    <input type="text" ng-model="editing.height">
                    <br>
                    <input type="text" ng-model="editing.weight">
                    <br>
                    <input type="text" ng-model="editing.weight">
                    <br>
                    <input type="text" ng-model="editing.usd_value">
                    <br>
                    <textarea ng-model="editing.description"></textarea>
                    <br>
                    <input type="submit" value="{{ editing.name ? 'Update' : 'Add' }}" ng-click="addUpdateProduct()">
                </form>
            </div>
        </div>
    </div>
@stop

