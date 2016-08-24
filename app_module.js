// ---------- Components of an AngularJS Application ----------
//
// AngularJS provides a front end framework based on the MVC model. It is built on top of JavaScript and JQuery.
// With MVC the Model represents the data source, the View is the rendered page, and the Controller handles communication
// between both of them. By structuring your page this way your code is easier to maintain, easier to update and
// makes for more readable code.
//
// AngularJS uses modules which represent the components used in your application. Using modules makes it easy to reuse
// your code in many applications. Web pages are normally manipulated by working with the DOM object in JavaScript and JQuery.
// AngularJS allows you to extend HTML tags and attributes using AngularJS directives which make it easy to bind data
// directly to HTML elements.
//
// AngularJS uses JavaScript objects to represent data called Scope which can be data generated on the web server,
// a database, web service, or client side AngularJS code.
//
// You can use expressions that are directly linked to the scope (data) so that the page is updated dynamically as the data changes.
// Data binding works as well so that when data changes on the web page the model is also updated.
//
// Many services are provided for common tasks like using AJAX techniques to dynamically pull data from a web
// service or the server.

// Here we implement the template, module, controller and scope


// Define the AngularJS Module. Modules are used to
// 1. Associate an AngularJS app with part of an HTML document
// 2. Provide access to AngularJS features
// 3. Help with organization
// angular.module() excepts the module name, list of modules this module needs and an optional configuration for the module.
// Modules that work with HTML normally have a name that contains app.
var app = angular.module('app_module', []);

app_module.controller('app_ctrl_1', function($scope) {

  $scope.name1 = 1;
  $scope.message = message;


});
