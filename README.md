# Wellington Start-up Weekend 2014 - Angular Bootcamp

## Links

* Angular blog http://blog.angularjs.org/ - good for news etc.
* Angular modules directory http://ngmodules.org/
* Restangular http://ngmodules.org/modules/restangular - an improved version of
  the built-in $resource
* Angular UI https://github.com/angular-ui/ui-router is recommended if you
  application has anything other than very basic routing needs
* Angular and Rails: http://ngmodules.org/modules/angularjs-rails-resource -
  haven't tried this but it might be useful if you are hitting a Rails server 
  
## Tests

To run the tests:

```shell
$ cd /path/to/angular-bootcamp
$ grunt unit # runs all unit tests through karma
$ grunt e2e  # runs all end-to-end tests through protractor & webdriver 
$ grunt test # run both unit tests and end-to-end tests
```
