<?php

class Product extends Eloquent {

    protected $fillable = ['name', 'description', 'width', 'length', 'height', 'weight', 'usd_value'];

}