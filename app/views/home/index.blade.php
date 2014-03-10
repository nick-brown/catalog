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
                    <input type="text" ng-model="editing.name" >
                    <br>
                    <input type="submit" value="{{ editing.name ? 'Update' : 'Add' }}" ng-click="addUpdateProduct()">
                </form>
            </div>
        </div>
    </div>
@stop

