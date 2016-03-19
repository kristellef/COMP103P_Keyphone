angular.module('app.services', [])



.factory('GameData', [function($scope, $localstorage){
  var gameData = {}

  return {
    gameData : gameData,
    createGameData: function(id) {
      list = $localstorage.getList(id)
      gameData.id = list._id;
      gameData.name = list.name;
      gameData.words = [];
      for(var i in list.words) {
        w = {};
        w.word = list.words[i];
        
      }

    },
  }
}])





.factory('$audioPlayer', [function($scope){
  var player = {
    key : ''
  };

  return {
    player : player,
    play: function(track, key) {
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
        console.log(localStorage.getItem(i));
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

    /*
    
    */

    getList: function(id) {
      return JSON.parse($window.localStorage[id] || '{}');
    }

  }
}])



.service('BlankService', [function(){

}]);

