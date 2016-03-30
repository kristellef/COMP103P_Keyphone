angular.module('app.services', [])

// TODO: collect data on every click and send it AWS endpoint

.factory('WordSetup', [function($scope){
  return {
    createRandomCharArray : function(first) {
      var nineChars = [];
        var pool = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        // delete the first char from the pool
        for(var i in pool) {
            if(first == pool[i]){
                pool.splice(i, 1);
                break;
            }
        }
        //console.log(pool);
        // generate the other 8 chars from the pool and add them
        // to nineChars[]
        for(var i = 0; i < 8; i++){
            var pool_index = Math.floor(pool.length * Math.random());
            // remove the char at pool_index and save as c
            var c = pool.splice(pool_index, 1);
            // insert c into nineChars at pos
            nineChars.splice(0, 0, c[0]);
        }
        // generate a random position in nineChars and add first
        // there
        var pos = Math.floor(8 * Math.random());
        nineChars.splice(pos, 0, first);
        return nineChars;
    },
    replaceSixChars : function(arr, first) {
      var i = 0;
      while (i < 6) {
        // generate random number
        var rand = Math.floor(arr.length * Math.random());
        if (arr[rand] != " " && arr[rand] != first){
          i++;
          arr[rand] = " ";
        }
      }
      return arr;
    },
    replaceAllButCorrect : function(arr, first) {
        for(var i in arr){
            if(arr[i] != first){
                arr[i] = " ";
            }
        }
    }
  }
}])


.factory('GameDataCreator', [function($scope){
  return {
    createGameData: function(list) {
      var gameData = {};
      gameData.id = list._id;
      gameData.startTime = (new Date).getTime();
      gameData.endTime;
      gameData.name = list.name;
      gameData.activeWords = list.words.length;
      gameData.words = [];
      gameData.finished = false;
      for(var i in list.words) {
        w = {};
        w.time = 0;
        w.word = list.words[i];
        w.played = false;
        w.solved = false;
        w.attempts = 0;
        w.saidCorrectly = false;
        gameData.words.push(w);
      }
      return gameData;
    }
  }
}])

.factory('$audioPlayer', [function($scope){
  var player = {
    key : ''
  };

  return {
    player : player,
    play: function(track, key) {
        var track = 'data/audio/' + track + '.wav';
        if(ionic.Platform.isAndroid() ||
    ionic.Platform.isIOS()){
            if(player.key != key){
                    if(player.key != '') {
                        window.plugins.NativeAudio.unload(player.key);
                    }
                    // preload the audiofile
                    window.plugins.NativeAudio.preloadSimple(key, track, function(msg) {
                        console.log('status: ' + msg);
                        player.key = key;
                        window.plugins.NativeAudio.play(key);
                    }, function(msg) {
                        console.log('error: ' + msg);
                    });
            } else {
                    window.plugins.NativeAudio.play(key);
            }
        } else {
            (new Audio(track)).play();
        }
    }
  }
}])

.factory('$localstorage', ['$window', function($window) {
  return {
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    /*
     * $localstorage.getAllLists() :
     * Returns an array with all lists in the localstorage
     * [
     *  {
     *    type : String,
     *    _id  : Number,
     *    name : String,
     *    words: String[]
     *  }
     * ]
     */
    getAllLists: function() {
      var words = [];
      for (var i in localStorage){
        //console.log(localStorage.getItem(i));
            // just in case there are "non-jsons in the local-storage"
            try {
                    item = JSON.parse(localStorage.getItem(i));
                    if (item.type === "List"){
                            words.push(item);
                    }
                } catch (err) {
                    console.warn("not a json: [" + localStorage.getItem(i) + "] ...deleted");
                    localStorage.removeItem(i);
                }
      }
      return words;
    },
    getList: function(id) {
      return JSON.parse($window.localStorage[id] || '{}');
    }
  }
}]);
