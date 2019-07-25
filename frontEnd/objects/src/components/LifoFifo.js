class LifoFifo {
    constructor() {
        this.fruitArray = [];
    }

    insert (item) {
       this.fruitArray.push(item);
        return this.fruitArray;
    }

    delLifo() {
        if(this.fruitArray.length > 0) {
            this.fruitArray.pop();
        }        
        return this.fruitArray;
    }

    delFifo() {
        if(this.fruitArray.length > 0) {
            this.fruitArray.shift();
        }    
        return this.fruitArray;
    }
    
}

export default LifoFifo;