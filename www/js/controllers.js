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
   
.controller('dailyUseCtrl', function($scope, $ionicPlatform, $audioPlayer) {
    
    $ionicPlatform.ready(function() {
        $scope.playTrack = $audioPlayer.play;

    })

})
   
.controller('chooseListCtrl', function($scope) {

})
   
.controller('catCtrl', function($scope,$localstorage) {

    $scope.name= ["cat","dog","fish","hat","jug","leaf","pen","ring","watch"];

    //var list = $localstorage.getList(listID);
    //var words = list.words;
    $scope.number=Math.round(Math.random()*8);// 8=length-1    use this random number to get a random words from list
    $scope.numberforother=Math.round(Math.random()*14);//get numbers different from the correct one

     
    
    $scope.first=($scope.name[$scope.number].charAt(0)).toUpperCase();    //remember to add $scope for variable 
  


    $scope.basic=[];
    $scope.basic=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (var i=0; i<26; i++) {
        if ($scope.first==$scope.basic[i]) {
            $scope.basic.splice(i,1);
            break;
        }
    }
    
   

    $scope.link=[];   ////// used for change page to correct
    for (var n = 0; n <9; n++) {
       $scope.link[n]="catNotcorrect";
    }


    


    $scope.pos=Math.round(Math.random()*7+1); ///position of correct word
    $scope.link[$scope.pos]="catCorrect";   //used to change page to correct
    $scope.position=[];
    for (var i=0; i <9; i++) {
        if (i==$scope.pos) {$scope.position[i]=$scope.first;}
        else{$scope.position[i]=$scope.basic[($scope.numberforother)+i+1];}
    }
   


    




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