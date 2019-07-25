import LifoFifo from './LIFOFIFO';
test('Testing the LifoFifo Class', () => {
    console.log("Testing the LIFO FIFO constructor");
    const fruitStore =  new LifoFifo();
    expect(fruitStore.fruitArray.length).toBe(0);

    console.log("Testing Insert");
    fruitStore.Insert("apple");
    expect(fruitStore.fruitArray.length).toBe(1);
    expect(fruitStore.fruitArray[0]).toBe('apple');
    fruitStore.insert("orange");
    expect(fruitStore.fruitArray.length).toBe(2);
    expect(fruitStore.fruitArray[1]).toBe('orange');
    fruitStore.insert("pear");
    expect(fruitStore.fruitArray.length).toBe(3);
    expect(fruitStore.fruitArray[2]).toBe('pear');
    fruitStore.insert("tomato");
    expect(fruitStore.fruitArray.length).toBe(4);
    expect(fruitStore.fruitArray[3]).toBe('tomato');
    // console.log(fruitStore.fruitArray);

    console.log("Testing for delLifo method");
	fruitStore.delLifo();//this will delete tomato from the end
    expect(fruitStore.fruitArray.length).toBe(3);
    expect(fruitStore.fruitArray[2]).toBe('pear');
	fruitStore.delLifo();
    expect(fruitStore.fruitArray[1]).toBe('orange');
    fruitStore.delLifo();
    expect(fruitStore.fruitArray.length).toBe(1);
    expect(fruitStore.fruitArray[0]).toBe('apple');
    fruitStore.delLifo();
    expect(fruitStore.fruitArray.length).toBe(0);
    expect(fruitStore.fruitArray).toEqual([]);

    console.log("put the fruits back to the list");
    fruitStore.insert("apple");
    expect(fruitStore.fruitArray.length).toBe(1);
    fruitStore.insert("orange");
    expect(fruitStore.fruitArray.length).toBe(2);
    fruitStore.insert("pear");
    expect(fruitStore.fruitArray.length).toBe(3);
    fruitStore.insert("tomato");
    expect(fruitStore.fruitArray.length).toBe(4);

    console.log("Testing for delFifo method");
	// console.log(fruitStore.fruitArray);
	fruitStore.delFifo();//this will delete apple from the beginning
    expect(fruitStore.fruitArray.length).toBe(3);
    expect(fruitStore.fruitArray[0]).toBe('orange');//the first item should be orange
	fruitStore.delFifo();
    expect(fruitStore.fruitArray.length).toBe(2);
    expect(fruitStore.fruitArray[0]).toBe('pear');
    fruitStore.delFifo();
    expect(fruitStore.fruitArray.length).toBe(1);
    expect(fruitStore.fruitArray[0]).toBe('tomato');
    fruitStore.delFifo();
    expect(fruitStore.fruitArray.length).toBe(0);
    expect(fruitStore.fruitArray).toEqual([]);




})
	