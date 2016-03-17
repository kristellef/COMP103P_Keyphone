angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },

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
    }

  }
}])



.service('BlankService', [function(){

}]);

