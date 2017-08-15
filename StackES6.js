let _items = Symbol();

class Stack {
	constructor () {
		this[_items] = [];
	}
	push(element){
		this[_items].push(element);
	}
	print(){
		console.log(this[_items].toString());
	}
}

let stack = new Stack();
stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.print();



let StackMap = (function () {
	const items = new WeakMap();
		class StackMap {
			constructor(){
				items.set(this, []);
			}
			push(element){
				let s = items.get(this);
				s.push(element);
			}
			pop(){
				let s = items.get(this);
				let r = s.pop();
				return r;
			}
		}
	});