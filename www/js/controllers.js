angular.module('app.controllers', [])
  
.controller('summaryCtrl', function($scope) {

})
   
.controller('correctCtrl', function($scope) {

})
   
.controller('incorrectCtrl', function($scope) {

})
   
.controller('helpCtrl', function($scope) {

})
   
.controller('keyphoneCtrl', function($scope) {

})
   
.controller('dailyUseCtrl', function($scope, $ionicPlatform) {
    $scope.player = {
        key: ''
    }

    $ionicPlatform.ready(function() {
        $scope.playTrack = function(track, key) {
            if($scope.player.key != key){
                if($scope.player.key != '') {
                    window.plugins.NativeAudio.unload($scope.player.key);
                }
                // preload the audiofile
                window.plugins.NativeAudio.preloadSimple(key, track, function(msg) {
                    console.log('status: ' + msg);
                    $scope.player.key = key;
                    window.plugins.NativeAudio.play(key);
                }, function(msg){
                    console.log('error: ' + msg);
                });
            } else {
                window.plugins.NativeAudio.play(key);
            }
        }
    })

})
   
.controller('chooseListCtrl', function($scope) {

})
   
.controller('catCtrl', function($scope) {
    $scope.name=["Cat","Dog","Fish","Hat","Jug","Leaf","Pen","Ring","Watch"];
    // use a length to generate number
    $scope.number=Math.round(Math.random()*9);
    $scope.numberforother=Math.round(Math.random()*17);

    $scope.first=$scope.name[$scope.number][0];
    
    $scope.basic=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
  
    $scope.forA=["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forB=['A',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forC=['A',"B","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forD=['A',"B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forE=['A',"B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forF=['A',"B","C","D","E","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forG=['A',"B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forH=['A',"B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forI=['A',"B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forJ=['A',"B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forK=['A',"B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forL=['A',"B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forM=['A',"B","C","D","E","F","G","H","I","J","K","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forN=['A',"B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forO=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forP=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.forQ=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"];
    $scope.forR=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"];
    $scope.forS=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"];
    $scope.forT=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    $scope.forU=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
    $scope.forV=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"];     
    $scope.forW=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
    $scope.forX=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];
    $scope.forY=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"];
    $scope.forZ=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];


})
   
.controller('catCorrectCtrl', function($scope) {

})
   
.controller('dogCtrl', function($scope) {

})
   
.controller('dogNotCorrectCtrl', function($scope) {

})
   
.controller('dogCorrectCtrl', function($scope) {

})
   
.controller('dogNotCorrect2Ctrl', function($scope) {

})
   
.controller('catNotcorrectCtrl', function($scope) {

})
   
.controller('catNotCorrect2Ctrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope, $ionicHistory, $localstorage) {
    

    $scope.delete = function() {
        localStorage.clear();
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        location.reload();
    }


    $scope.lists = $localstorage.getAllLists();
})

.controller('page20Ctrl', function($scope) {
    

})
   
.controller('addListCtrl', function($scope, $http, $ionicPlatform, $localstorage, $window, $ionicHistory) {

    $http.get('data/words.json').success(function(data) {
        $scope.words = data;

    })
    
    // localStorage for words
    var words = [];
    $scope.addWord = function(word) {
        var found = false;
        for(var i = 0; i < words.length; i++){
            if(word.localeCompare(words[i]) == 0){
                found = true;
                words.splice(i, 1);
                break;
            }
       }
       if(!found) {
            words.push(word);
       } 
    }

    $scope.saveObj = function(newList){
        var _id = new Date().getTime();
        $localstorage.setObject(_id, {
            type: 'List',
            _id : _id,
            name : newList.name,
            words : words

        });

        // this is not working under IOS
        location.href = '#/page19';
        $window.location.reload();

    };

})
   
.controller('editListCtrl', function($scope) {

})
   
.controller('addList2Ctrl', function($scope) {

})
   
.controller('addWordsCtrl', function($scope) {

})