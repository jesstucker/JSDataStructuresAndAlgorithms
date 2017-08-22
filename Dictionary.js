function Dictionary(){
	let items = {};

	this.set = function(key, value){
		items[key] = value;
	};
	this.delete = function(key){
		if (this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	};
	this.has = function(key){
		return key in items;
	};
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	};
	this.clear = function(){
		items = {};
	};
	this.size = function(){
		return Object.keys(items).length;
	};
	this.keys = function(){
		return Object.keys(items);
	};
	this.values = function(){
		let values = []
		for (var k in items){
			if(this.has(k)){
			values.push(items[k]);
			}
		}
		return values;
	};
	this.getItems = function(){
		return items;
	};
}

let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has("Gandalf"))
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));
dictionary.delete("John");
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());




function HashTable(){
	let table = [];

	this.put = function(key,value){
		let position = loseloseHashCode(key);
		console.log(position + ' - ' + key);
		table[position] = value;
	};
	this.remove = function(key,value){};
	this.get = function(key){};

	let loseloseHashCode = function(key){
		let hash = 0;
		for (let i=0; i<key.length; i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	}
}