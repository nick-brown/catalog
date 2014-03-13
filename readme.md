## Product Catalog  


[![Latest Stable Version](https://poser.pugx.org/laravel/framework/version.png)](https://packagist.org/packages/laravel/framework) [![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.png)](https://packagist.org/packages/laravel/framework) [![Build Status](https://travis-ci.org/laravel/framework.png)](https://travis-ci.org/laravel/framework)

### [Live Demo](http://192.237.215.23/catalog/public/)

This utility was built using:

* PHP 5.4.9
* Laravel 4.1.23
* Angular 1.2.14
* MySQL 5.5.32

Along with Composer, Bower, and Grunt

PHP 5.4.9 was chosen largely for the inclusion of a development CLI server and the short array syntax.

Laravel was used in place of Zend for the API layer, as I am more familiar with it than Zend.

Though I find Backbone stronger for organization in mid-to-large applications, the agility that Angular allows made it suitable for an app of this size.  In addition, I try to rely on underscore.js only as a backup option, as it is not always available on projects I am working on.  The ng-resource module was added to bring brevity and increased support for promises into the application, instead of relying on $http.

