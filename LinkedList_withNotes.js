function LinkedList() {
	let Node = function(element){
		this.element = element;
		this.next = null;
	};

	let length = 0;
	let head = null;

	this.append = function(element){
		let node = new Node(element);
		let current;

		if (head === null){
			head = node;
		} else {
				current = head;
				while(current.next){
					current = current.next;
				}
				current.next = node;
			}
		length++;
	};

	this.insert = function(position, element){
		if(position >= 0 && position <= length){
			let node = new Node(element);
			let current = head;
			let previous;
			index = 0

			if (position === 0){
				node.next = current;
				head = node;
			} else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true
		} else {
			return false;
		}
	};

	this.removeAt = function(position){
		if (position > -1 && position < length) {
			let current = head;
			let previous;
			index = 0;

			if(position === 0){
				head = current.next;
			} 
			else {
					while(index++ < position){
						previous = current;
						current = current.next;
					}
					previous.next = current.next;
				}
				length--;
				return current.element;
		} 
			else {
					return null;
			}
	};
	this.remove = function(element){};
	this.indexOf = function(element){};
	this.isEmpty = function(){};
	this.size = function(){};
	this.toString = function(){};
	this.print = function(){};
}

let list = new LinkedList();
list.append(15);
list.append(10);

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}



function DoublyLinkedList() {
	let Node = function(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	};

	let length = 0;
	let head = null;
	let tail = null;

	this.insert = function(position, element){
		if(position >= 0 && position <= length){
			let node = new Node(element);
			let current = head;
			let previous;
			let index = 0;

			if (position === 0){
				if (!head){
					head = node;
					tail = node;
					console.log("position is 0 and there's no head");
					sleep(2000);
				} else {
					node.next = current;
					current.prev = node;
					head = node;
					console.log("put in position 0, but only later")
					sleep(2000);
				}
			} else if (position === length) {

				console.log("putting in last position")
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			} else {
				
				// while (index++ < position){
				for(index; index < position; index++){
					console.log("INDEX: " + index);
					console.log("POSITION: " + position);
					console.log("iterating over list to find middle position, setting prev and next appropriately")	
					console.log(index + " < " + position + " ? " + (index < position))
					previous = current;
					sleep(2000);
					console.log("PREVIOUS: ")
					console.log(previous)

					current = current.next;
					sleep(2000);
					console.log("CURRENT: ")
					console.log(current)


					sleep(2000);
				}
				console.log("setting the nodes' next pointer")
				node.next = current;
				previous.next = node;
				sleep(2000);

				
				current.prev = node;
				console.log("setting current.prev")
				console.log(current.prev)
				sleep(2000);

				node.prev = previous;
				console.log("setting node.prev")
				console.log(node.prev)
				sleep(2000);
			}
			length++;
			console.log(length)
			console.log("<---------BREAK--------->")
			sleep(2000);
			return true;
		} else {
			return false;
		}
	};

	
};

dll = new DoublyLinkedList();
dll.insert(0, "a")
dll.insert(0, "b")
dll.insert(1, "c")
dll.insert(1, "d")
// dll.insert(2, "c")
// dll.insert(3, "d")
// dll.insert(3, "e")
