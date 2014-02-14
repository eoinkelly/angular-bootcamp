# Wellington Start-up Weekend 2014 - Angular Bootcamp

This repo contains two sample apps

* Angular and Rails: http://ngmodules.org/modules/angularjs-rails-resource -
  haven't tried this but it might be useful if you are hitting a Rails server 

### Persistence options
* Hoist apps http://hoistapps.com - Wellington based start-up aiming for world
  dominiation - free to try.
* Mongolab https://mongolab.com - A hosted MongoDB - they have a free plan too.
* Firebase https://www.firebase.com/ - Slick realtime messaging & peristence platform with great AngularJS support

* Angular and Rails: [angular-js-rails-resource](http://ngmodules.org/modules/angularjs-rails-resource)
 recommended if you are using rails
* [Conceptual overview of Angular for Jquery folks](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background)

## Notes

### Organising code
### DOM

* [ng-include](http://docs.angularjs.org/api/ng.directive:ngInclude)
* If you are manipulating the DOM, always use a directive
* always use [angular.element](http://docs.angularjs.org/api/angular.element) to access the DOM

### Gotchyas
* [ng-include expects an expression, strings must be explicit](http://stackoverflow.com/questions/12521905/angularjs-ng-include-does-not-include-view-unless-passed-in-scope)

### Servers

Restangular is a good choice for communicating with a RESTful endpoint. It has a
number of advantages over the built-in `$resource` service.
* Restangular tutorial: http://www.ng-newsletter.com/posts/restangular.html
* Restangular docs: https://github.com/mgonto/restangular

### Auth
### Routing

## Links

* Angular blog http://blog.angularjs.org/ - good for news etc.
* Angular modules directory http://ngmodules.org/
* [Setting up a fresh angular install with Yeoman](http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/)
* [Restangular](http://ngmodules.org/modules/restangular) - an improved version of
  the built-in $resource
* [Angular UI](https://github.com/angular-ui/ui-router) is recommended if you
  application has anything other than very basic routing needs
