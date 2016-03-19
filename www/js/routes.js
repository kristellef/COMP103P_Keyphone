angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('summary', {
    url: '/page2',
    templateUrl: 'templates/summary.html',
    controller: 'summaryCtrl'
  })

  .state('correct', {
    url: '/page3',
    templateUrl: 'templates/correct.html',
    controller: 'correctCtrl'
  })

  .state('incorrect', {
    url: '/page4',
    templateUrl: 'templates/incorrect.html',
    controller: 'incorrectCtrl'
  })

  .state('help', {
    url: '/page5',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('keyphone', {
    url: '/page8',
    templateUrl: 'templates/keyphone.html',
    controller: 'keyphoneCtrl'
  })

  .state('dailyUse', {
    url: '/page10',
    templateUrl: 'templates/dailyUse.html',
    controller: 'dailyUseCtrl'
  })

  .state('chooseList', {
    url: '/page11',
    templateUrl: 'templates/chooseList.html',
    controller: 'chooseListCtrl'
  })

  .state('cat', {
    url: '/page9',
    templateUrl: 'templates/cat.html',
    controller: 'catCtrl'
  })

  .state('catCorrect', {
    url: '/page12',
    templateUrl: 'templates/catCorrect.html',
    controller: 'catCorrectCtrl'
  })

  .state('dog', {
    url: '/page13',
    templateUrl: 'templates/dog.html',
    controller: 'dogCtrl'
  })

  .state('dogNotCorrect', {
    url: '/page14',
    templateUrl: 'templates/dogNotCorrect.html',
    controller: 'dogNotCorrectCtrl'
  })

  .state('dogCorrect', {
    url: '/page15',
    templateUrl: 'templates/dogCorrect.html',
    controller: 'dogCorrectCtrl'
  })

  .state('dogNotCorrect2', {
    url: '/page16',
    templateUrl: 'templates/dogNotCorrect2.html',
    controller: 'dogNotCorrect2Ctrl'
  })

  .state('catNotcorrect', {
    url: '/page17',
    templateUrl: 'templates/catNotcorrect.html',
    controller: 'catNotcorrectCtrl'
  })

  .state('catNotCorrect2', {
    url: '/page18',
    templateUrl: 'templates/catNotCorrect2.html',
    controller: 'catNotCorrect2Ctrl'
  })

  .state('settings', {
    url: '/page19',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('page20', {
    url: '/page20',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

  .state('editList', {
    url: '/page21/:ListID',
    templateUrl: 'templates/editList.html',
    controller: 'editListCtrl'
  })

  .state('addList', {
    url: '/page22',
    templateUrl: 'templates/addList.html',
    controller: 'addListCtrl'
  })

  

  .state('addWords', {
    url: '/page24',
    templateUrl: 'templates/addWords.html',
    controller: 'addWordsCtrl'
  })

$urlRouterProvider.otherwise('/page8')

  

});