    
class Node {
	constructor(subject, amount, next, prev) {
		this.subject = subject;
		this.amount = amount;
		this.next = next;
		this.prev = prev;
	}

	show() {
		return `${this.subject} ${this.amount}`
	}
}

export default Node;