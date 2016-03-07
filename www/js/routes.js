angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('keyphone', {
    url: '/page6',
    templateUrl: 'templates/keyphone.html',
    controller: 'keyphoneCtrl'
  })

  .state('settings', {
    url: '/page7',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('everydayUse', {
    url: '/page8',
    templateUrl: 'templates/everydayUse.html',
    controller: 'everydayUseCtrl'
  })

  .state('practise', {
    url: '/page9',
    templateUrl: 'templates/practise.html',
    controller: 'practiseCtrl'
  })

  .state('practise2', {
    url: '/page10',
    templateUrl: 'templates/practise2.html',
    controller: 'practise2Ctrl'
  })

  .state('practise3', {
    url: '/page13',
    templateUrl: 'templates/practise3.html',
    controller: 'practise3Ctrl'
  })

  .state('practise4', {
    url: '/page14',
    templateUrl: 'templates/practise4.html',
    controller: 'practise4Ctrl'
  })

  .state('practise5', {
    url: '/page15',
    templateUrl: 'templates/practise5.html',
    controller: 'practise5Ctrl'
  })

  .state('practise6', {
    url: '/page12',
    templateUrl: 'templates/practise6.html',
    controller: 'practise6Ctrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});