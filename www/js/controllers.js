angular.module('app.controllers', [])

.controller('startCtrl', function($scope) {

})

.controller('dailyUseCtrl', function($scope, $ionicPlatform, $audioPlayer) {

    $ionicPlatform.ready(function() {
        $scope.playTrack = $audioPlayer.play;
    })
})

.controller('chooseListCtrl', function($scope, $localstorage, $state, GameDataCreator) {
    $scope.$on('$ionicView.enter', function() {
        $scope.lists = $localstorage.getAllLists();
    });
    $scope.chosenList = function(id) {
        $localstorage.setObject('current_game',
            GameDataCreator.createGameData($localstorage.getList(id)));
        $state.go("app.gamePad");
    }
})

.controller('gamePad', function($scope, $localstorage, $state, WordSetup) {
    var first, gameData, index;
    $scope.$on('$ionicView.enter', function() {
        gameData = $localstorage.getObject('current_game');
        console.log(gameData);
        if(gameData.activeWords > 0) {
            // get a random word
            var rand = Math.floor(gameData.activeWords * Math.random());
            var iterator = 0;
            index = 0;
            for(var i in gameData.words) {
                if (!gameData.words[i].played && rand == iterator){
                    // the correct index found!
                    index = i;
                }
                if (!gameData.words[i].played){
                    // increase iterator, since this is a correct index
                    iterator++;
                }
            }
            $scope.word = (gameData.words[index].word);
            //console.log(gameData.words[index].word);
            // now get the first char of the word
            // and generate 8 other random cars
            first = (gameData.words[index].word.charAt(0)).toUpperCase();
            // give the data to the scope
            $scope.chars = WordSetup.createRandomCharArray(first);
            gameData.activeWords--;
            // change attempt to 1
            gameData.words[index].attempts = 1;
            // change played = true
            gameData.words[index].played = true;
            // update localstorage game
            $localstorage.setObject('current_game', gameData);
            //console.log($localstorage.getObject('current_game'));

        } else {
            $state.go("app.summary");
        }
    })

    $scope.checkChar = function(c) {
        if(c == first){
            console.log("correct");
        } else {
            if (gameData.words[index].attempts < 2){
                gameData.words[index].attempts = 2;
                $localstorage.setObject('current_game', gameData);
                WordSetup.replaceSixChars($scope.chars, first);
            } else {
                console.log("wrong");
            }
        }
    }

})

.controller('settingsCtrl', function($scope, $ionicHistory, $localstorage, $state, $window) {
    $scope.delete = function() {
        localStorage.clear();
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        location.reload();
    }

    $scope.lists = $localstorage.getAllLists();

    if($scope.lists.length > 0){
        var selected = $scope.lists[0];
    }

    $scope.select = function(ListID) {
        selected = ListID;
        console.log(selected);
    }

     $scope.editList = function() {
        console.log(selected)
        $state.go('app.editList', { ListID: selected , reload : true})
    }

    $scope.deleteList = function() {
        localStorage.removeItem(selected);
        $window.location.reload();
    }

})

.controller('page20Ctrl', function($scope) {

})

.controller('addListCtrl', function($scope, $http, $ionicPlatform, $localstorage, $window, $state) {

    $scope.newList = {};
    $http.get('data/words.json').success(function(data) {
        $scope.words = data;
    });

    // localStorage for words
    var words = [];
    $scope.addWord = function(word) {
        var found = false;
        for(var i = 0; i < words.length; i++){
            if(word.localeCompare(words[i]) == 0) {
                found = true;
                words.splice(i, 1);
                break;
            }
       }
       if(!found) {
            words.push(word);
       }
    }

    $scope.saveObj = function() {
        var _id = new Date().getTime();
        $localstorage.setObject(_id, {
            type: 'List',
            _id : _id,
            name : $scope.newList.name,
            words : words
        });

        $state.go('app.settings');
        $window.location.reload();
    };
})

.controller('editListCtrl', function($scope, $http, $localstorage, $ionicPlatform, $stateParams, $state, $window) {

    $scope.list = $localstorage.getList($stateParams.ListID);
    // get the words and set the words from the list as checked
    $http.get('data/words.json').success(function(data) {
        var all_words = data;
        // create a array with the words as objects
        var words = [];
        for(var i in all_words){
            words.push({word: all_words[i], checked: false});
        }
        // get all words from the list
        var checkedWords = $scope.list.words;
        // mark the checkedWords in the words[]
        for (var i in checkedWords) {
            cword = checkedWords[i];
            for(var j in words){
                if(cword.localeCompare(words[j].word) === 0){
                    words[j].checked = true;
                }
            }
        }
        $scope.words = words;
        });

    $scope.save = function(){
        words = [];
        for(var i in $scope.words){
            if($scope.words[i].checked === true){
                words.push($scope.words[i].word);
            }
        }
        $scope.list.words = words;
        $localstorage.setObject($scope.list._id, $scope.list);
        $state.go("app.settings");
    }
    $scope.abort = function() {
        $scope.list = ''
        $state.go("app.settings");
    }
})

.controller('addWordsCtrl', function($scope) {

})

.controller('AppCtrl', function($scope) {

})
