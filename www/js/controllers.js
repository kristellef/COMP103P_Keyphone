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

    $scope.name= ["Cat","Dog","Fish","Hat","Jug","Leaf","Pen","Ring","Watch"];

    //var list = $localstorage.getList(listID);
    //var words = list.words;
    $scope.number=Math.round(Math.random()*8);// 8=length-1    use this random number to get a random words from list
    $scope.numberforother=Math.round(Math.random()*14);//get numbers different from the correct one

     
    
    $scope.first=$scope.name[$scope.number].charAt(0);    //remember to add $scope for variable 取出被选中单词的第一个字母
  
    $scope.fo={
    A:["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    B:["A","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    C:["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    D:["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    E:["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    F:["A","B","C","D","E","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    G:["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    H:["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    I:["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    J:["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    K:["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    L:["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    M:["A","B","C","D","E","F","G","H","I","J","K","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    N:["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    O:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"],
    P:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"],
    R:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"],
    S:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"],
    T:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"],
    U:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"],
    V:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"],  
    W:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"],
    X:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"],
    Y:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"],
    Z:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"],
     };
    
   

    $scope.link=[];   ////// used for change page to correct
    for (var n = 0; n <9; n++) {
       $scope.link[n]="catNotcorrect";
    }


    


    $scope.pos=Math.round(Math.random()*7+1); ///use for 9 choosing buttons in random
    $scope.link[$scope.pos]="catCorrect";   //used to change page to correct
    $scope.position=[];
    for (var i=0; i <9; i++) {
        if (i==$scope.pos) {$scope.position[i]=$scope.first;}
        else{$scope.position[i]=$scope.fo[$scope.first][($scope.numberforother)+i+1];}
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