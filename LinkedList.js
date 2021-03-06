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
				} else {
					node.next = current;
					current.prev = node;
					head = node;
				}
			} else if (position === length) {
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			} else {
				// while (index++ < position){
				for(index; index < position; index++){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;

				current.prev = node;
				node.prev = previous;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};

	this.removeAt = function(position){
		if (position > -1 && position < length){
			let current = head,
			previous,
			index = 0;

			if (position === 0){
				head = current.next;
				if (length === 1){
					tail = null;
				} else {
					head.prev = null;
				}
			} else if (position === length-1){
				current = tail;
				tail = current.prev;
				tail.next = null;
			} else {
				for(index; index < position; index++){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	};

	
};

dll = new DoublyLinkedList();
dll.insert(0, "a")
dll.insert(0, "b")
dll.insert(1, "c")
dll.insert(1, "d")
dll.insert(2, "c")
dll.insert(3, "d")
dll.insert(3, "e")
dll.removeAt(2)


