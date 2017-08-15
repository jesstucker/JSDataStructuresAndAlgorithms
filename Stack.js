function Stack() {
	let items = [];
	this.push = function(element){
		items.push(element)
	};
	this.pop = function(){
		return items.pop();
	};
	this.peek = function(){
		return items[items.length-1];
	};
	this.isEmpty = function(){
		return items.length == 0;
	};
	this.size = function(){
		return items.length;
	};
	this.clear = function(){
		items = [];
	};
	this.print = function(){
		console.log(items.toString());
	};	
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();


function divideBy2(decNumber){
	var remStack = new Stack(),
	rem,
	binaryString = '';

	while(decNumber > 0){
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
console.log(Math.floor(1/2));