import Node from './Node'

test('Test Node', () => {
	console.log('Testing creating new node');
	const newNode = new Node('apple', 1, null, null);

	console.log("newNode", newNode)

	//test show
    expect(newNode.show()).toBe('apple 1');

});