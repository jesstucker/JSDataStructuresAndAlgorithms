function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;

	function append(element) {
	this.dataStore[this.listSize++] = element;
	}

	function find(element) {
		for (var i=0; i < this.dataStore.length; ++i) {
			if (this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}

	function remove(element) {
		var foundAt = this.find(element);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt,1);
			--this.listSize;
			return true;
		}
		return false;
	}

	function length() {
		return this.listSize;
	}

	function toString() {
		return this.dataStore;
	}

	function insert(element, after) {
		var insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos+1, 0, element);
			return true;
		}
		return false;
	}

	function clear() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}

	function contains(element) {
		for (var i = 0; i < this.dataStore.length; i++) {
			if (this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	}

	function front() {
		this.pos = 0;
	}

	function end() {
		this.pos = this.listSize-1;
	}

	function prev() {
		if (this.pos >= 0) {
			--this.pos;
		}
	}

	function next() {
		if (this.pos < this.listSize) {
			++this.pos;
		}
	}

	function currPos() {
		return this.pos;
	}

	function moveTo(position){
		this.pos = position;
	}

	function getElement() {
		return this.dataStore[this.pos];
	}



}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");


for(names.front(); names.currPos() < names.length(); names.next()) {
	console.log(names.getElement());
}

for(names.end(); names.currPos() >= 0; names.prev()) {
	console.log(names.getElement());
}



function createArr(file){
	var fs = require('fs');
	var array = fs.readFileSync(file).toString().split("\n");
	for(i in array) {
		array[i] = array[i].trim()
	}
	return array;
}

var movieList = new List();
movies = createArr('films.txt');

function displayList(list) {
 for (list.front(); list.currPos() < list.length(); list.next()) {
 	if (list.getElement() instanceof Customer) {
 		console.log(list.getElement()["name"])
 	}	
	console.log(list.getElement());
 }
}
