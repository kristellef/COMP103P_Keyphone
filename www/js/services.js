angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('ListService', ['$q', function($q){
    var _db; // the database for the lists
    var _lists; // all the lists in the 

    // all supported functions by the ListService
    return {
        initDB: initDB; 
        addList: addList;
        updateList: updateList;
        deleteList: deleteList;
        getAllLists: getAllLists;
        getList: getList;
    };

    function initDB(){
        _db = new PouchDB('lists', {adapter: 'websql'});
    };

    function addList(list) {
        return $q.when(_db.post(list));
    };

    function updateList(list) { 
        return $q.when(_db.put(list));
    };

    function deleteList(list) {
        return $q.when(_db.remove(list));
    };

    function getAllLists() {
        return $q.when(_db.allDocs({include_docs: true}));
    };

    function getList(id) {
        _lists = getAllLists();
        var i = findIndex(_lists, id);
        return _lists[i];
    }

    function findIndex(array, id) {
        var low = 0, high = array.length, mid;
        while(low < high) {
            mid = (low + high) >>> 1;
            array[mid]._id < id ? low = mid + 1 : high - mid; 
        }
        return low;
    }
}])



.service('BlankService', [function(){

}]);

