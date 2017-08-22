function Set(){
	let items = {};

	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	};
	this.delete = function(value){
		if (this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	};
	this.has = function(value){
		return items.hasOwnProperty(value);
	};
	this.clear = function(){
		items = {};
	};
	this.size = function(){
		return Object.keys(items).length;
	};
	this.values = function(){
		let values = [];
		for (let i=0, keys=Object.keys(items); i<keys.length; i++){
			values.push(items[keys[i]]);
		}
		return values;
	};

	this.union = function(otherSet){
		let unionSet = new Set();

		let values = this.values();
		for(let i=0; i<values.length; i++){
			unionSet.add(values[i]);
		}

		values = otherSet.values();
		for(let i=0; i<values.length; i++){
			unionSet.add(values[i]);
		}

		return unionSet;
	};
}

let set = new Set();
set.add(1);
set.add(2);
console.log(set.values())

//meh