angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('keyphone', {
    url: '/page1',
    templateUrl: 'templates/keyphone.html',
    controller: 'keyphoneCtrl'
  })

  .state('keyphoneMenu', {
    url: '/menu',
    templateUrl: 'templates/keyphoneMenu.html',
    controller: 'keyphoneMenuCtrl'
  })

  .state('settings', {
    url: '/page5',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('newList', {
    url: '/page6',
    templateUrl: 'templates/newList.html',
    controller: 'newListCtrl'
  })

  .state('enterListName', {
    url: '/page8',
    templateUrl: 'templates/enterListName.html',
    controller: 'enterListNameCtrl'
  })

  .state('editList', {
    url: '/page7',
    templateUrl: 'templates/editList.html',
    controller: 'editListCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});