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
   
.controller('catCtrl', function($scope) {
    $scope.name=["Cat","Dog","Fish","Hat","Jug","Leaf","Pen","Ring","Watch"];

    $scope.number=Math.round(Math.random()*9);// use a length to generate number
    $scope.numberforother=Math.round(Math.random()*17);

     
    $scope.basic=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $scope.first=$scope.name[$scope.number].charAt(0);    //remember to add $scope for variable
  
    $scope.for={
    A:["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    B:['A',"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    C:['A',"B","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    D:['A',"B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    E:['A',"B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    F:['A',"B","C","D","E","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    G:['A',"B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    H:['A',"B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    I:['A',"B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    J:['A',"B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    K:['A',"B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    L:['A',"B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    M:['A',"B","C","D","E","F","G","H","I","J","K","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    N:['A',"B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    O:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"],
    P:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"],
    R:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"],
    S:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"],
    T:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"],
    U:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"],
    V:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"],  
    W:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"],
    X:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"],
    Y:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"],
    Z:['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"],
     };
    //$scope.aaa=Math.round(Math.random()*9); ///use for 9 choosing buttons in random
    //$scope.final=[];
    //for (var i = 0; i < 9 &&i!=scope.aaa; i++) {
        //$scope.final[i]=$scope.for[first][numberforother+2]
    //}


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
        $state.go('editList', { ListID: selected , reload : true})
    }

    $scope.deleteList = function() {
        localStorage.removeItem(selected);
        $window.location.reload();

    }

})

.controller('page20Ctrl', function($scope) {
    
})
   
.controller('addListCtrl', function($scope, $http, $ionicPlatform, $localstorage, $window) {

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

        location.href = '#/page19';
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
        $state.go("settings");
    }

    $scope.abort = function() {
        $scope.list = ''
        $state.go("settings");
    }


    
})
   
.controller('addList2Ctrl', function($scope) {

})
   
.controller('addWordsCtrl', function($scope) {

})