import Node from './Node'

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.current = this.head;	
	}

	// addToHead (subject, amount) {
	//   var newNode = new Node(subject, amount, this.head, null);
	//   if (this.head) this.head.prev = newNode;
	//   else this.tail = newNode;
	//   this.head = newNode;
	//   this.current = this.head;
	// };
	 
	// addToTail(subject, amount) {
	//   var newNode = new Node(subject, amount, null, this.tail);
	//   if (this.tail) this.tail.next = newNode;
	//   else this.head = newNode;
	//   this.tail = newNode;
	// };
	 
	jumpToHead() {		
		return this.current = this.head;
	}

	jumpToTail() {		
		return this.current = this.tail;
	}

	moveToNext() {
		if(this.current.next)						
		 this.current = this.current.next;
		return this.current;
	}

	moveForward() {
		if (this.current.prev) 				
		 this.current = this.current.prev;
		return this.current;
	}

	insertAfter(subject, amount) {
		if(this.current === null) {
			let newNode = new Node(subject, amount, null, null);
			  this.head = newNode;
			  this.tail = newNode;
			  this.current = this.head;		
		} else if(this.current === this.tail) {
			let newNode = new Node(subject, amount, null, this.current);
			this.current.next = newNode;
			this.current = newNode;
			this.tail = newNode;
		} 	else{
			let newNode = new Node(subject, amount, this.current.next, this.current);
			// this.current.previous = newNode
			this.current.next = newNode;
			this.current = newNode;		
		}	
		return this.current;	
	}

	delete() {
		if (!this.current.prev && !this.current.next){
			this.current = null;
			this.head = null;
			this.tail =null;
		} else if(!this.current.next) {
			this.current= this.current.prev;
			this.current.next=null;
			this.tail = this.current;
		} else {
			this.current = this.current.next;
			this.current.prev = this.current.prev;			
		}
		return this.current;
	}
		
}

export default LinkedList;