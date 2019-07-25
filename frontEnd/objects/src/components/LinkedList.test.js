import Node from './Node'
import LinkedList from './LinkedList'

test('Test LinkedList', () => {
	var newLinkedList = new LinkedList();
	// console.log("new LinkedList", newLinkedList);
	expect(newLinkedList).toEqual({head:null, tail:null, current:null})

	newLinkedList.insertAfter('apple', 1)
	// console.log(newLinkedList)
	expect(newLinkedList.head.subject).toEqual('apple')
	expect(newLinkedList.head.amount).toEqual(1)
	expect(newLinkedList.tail.subject).toEqual('apple')
	expect(newLinkedList.current.subject).toEqual('apple')



	newLinkedList.insertAfter('orange', 2)
	// console.log(newLinkedList)
	expect(newLinkedList.head.subject).toEqual('apple')
	expect(newLinkedList.current.subject).toEqual('orange')
	expect(newLinkedList.tail.subject).toEqual('orange')
	

	newLinkedList.insertAfter('tomato', 3)
	// console.log(newLinkedList)
	expect(newLinkedList.tail.subject).toEqual('tomato')
	expect(newLinkedList.tail.amount).toEqual(3)

	newLinkedList.jumpToHead()
	expect(newLinkedList.jumpToHead().subject).toEqual("apple")
	expect(newLinkedList.current.subject).toEqual('apple')

	newLinkedList.insertAfter('new', 4)
	// console.log(newLinkedList)
	expect(newLinkedList.tail.subject).toEqual('tomato')
	expect(newLinkedList.current.subject).toEqual('new')
	expect(newLinkedList.current.prev.subject).toEqual('apple')
	expect(newLinkedList.current.next.subject).toEqual('orange')
	// console.log(newLinkedList.current.next)
	// expect(newLinkedList.tail.amount).toEqual(3)


	//jumpToHead, expect apple
	expect(newLinkedList.jumpToHead().subject).toEqual("apple")
	expect(newLinkedList.current.subject).toEqual('apple')
	// console.log(newLinkedList)

	//moveToNext, expect new
	expect(newLinkedList.moveToNext().subject).toEqual('new')
	expect(newLinkedList.current.subject).toEqual('new')
	// console.log(newLinkedList)

	//moveForward, expect apple
	expect(newLinkedList.moveForward().subject).toEqual('apple')
	expect(newLinkedList.current.subject).toEqual('apple')
	// console.log(newLinkedList)

	//insertAfter
	expect(newLinkedList.insertAfter('pear', 4).subject).toEqual("pear")
	expect(newLinkedList.current.subject).toEqual('pear')
	expect(newLinkedList.current.prev.subject).toEqual('apple')
	// console.log(newLinkedList)

	console.log('delete')
	//delete the middle ones:
	expect(newLinkedList.delete().subject).toEqual('new')
	expect(newLinkedList.current.next.subject).toEqual('orange')
	expect(newLinkedList.current.prev.subject).toEqual('apple')
	expect(newLinkedList.current.subject).toEqual('new')
	console.log(newLinkedList)

	//delete the tail, delete the tomato
	newLinkedList.jumpToTail()
	expect(newLinkedList.delete().subject).toEqual('orange')
	expect(newLinkedList.current.subject).toEqual('orange')
	expect(newLinkedList.current.next).toEqual(null)
	expect(newLinkedList.tail.subject).toEqual('orange')
	// console.log(newLinkedList)

	//delete the orange
	expect(newLinkedList.delete().subject).toEqual('apple')
	expect(newLinkedList.current.subject).toEqual('apple')
	// console.log(newLinkedList.current)

	//delete the last one, make the whole object empty
	expect(newLinkedList.delete()).toEqual(null)
	// console.log(newLinkedList)


})