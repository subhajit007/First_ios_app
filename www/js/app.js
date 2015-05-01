// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smoothie_app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Configure routes
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    //An abstract state can have child states but can not get activated itself. An 'abstract' state is simply a state that can't be transitioned to. It is activated implicitly when one of its descendants are activated.
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'states/menu.html'
      })

      .state('app.smoothies', {
          url: "/smoothies",
        views: {
          'menuContent': {
            templateUrl: "states/smoothies.html"
          }
        }
      })

      .state('app.smoothie', {
          url: "/smoothies/:smoothieId",
        views: {
          'menuContent': {
            templateUrl: "states/smoothie.html"
          }
        }
      })

      .state('app.about', {
          url: "/aboutus",
        views: {
          'menuContent': {
            templateUrl: "states/about.html"
          }
        }
      })
      .state('app.history', {
          url: "/history",
        views: {
          'menuContent': {
            templateUrl: "states/history.html"
          }
        }
      });
    $urlRouterProvider.otherwise('/app/smoothies');

  });
