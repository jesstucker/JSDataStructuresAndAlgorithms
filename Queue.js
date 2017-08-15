function Queue(){
	let items = [];
	this.enqueue  = function(element){
		items.push(element);
	};
	this.dequeue = function(element){
		return items.shift();
	}
	this.front = function(){
		return items[0];
	};
	this.isEmpty = function(){
		return items.length == 0;
	};
	this.size = function(){
		return items.length;
	};
	this.print = function(){
		console.log(items.toString());
	};
};

function PriorityQueue() {
	let items = [];

	function QueueElement (element, priority){
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority){
		let queueElement = new QueueElement(element, priority);
		let added = false;
		for (let i=0; i<items.length; i++){
			if (queueElement.priority < items[i].priority){
				items.splice(i,0,queueElement);
				added = true;
				break;
			}
		};
		if(!added){
			items.push(queueElement);
		};
	};

	this.print = function(){
		for(let i=0; i<items.length; i++){
			console.log(`${items[i].element} -
			${items[i].priority}`);
			}
		};

	this.dequeue = function(element){
		return items.shift();
	}
	this.front = function(){
		return items[0];
	};
	this.isEmpty = function(){
		return items.length == 0;
	};
	this.size = function(){
		return items.length;
	};

};

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();


function hotPotato(nameList, num){
	let queue = new Queue();
	for (let i=0; i < nameList.length; i++){
		queue.enqueue(nameList[i]);
	}

	let eliminated = '';
	while (queue.size() > 1){
		for (let i=0; i<num; i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated + ' was eliminated from the Hot Potato game.');
	}

	return queue.dequeue();
}

let names = ['John','Jack','Camila','Ingrid','Carl'];let winner =
hotPotato(names, 7);console.log('The winner is: ' + winner);