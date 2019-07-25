import React from 'react'
import LifoFifo from './LifoFifo'

class LifoFifoComp extends React.Component{
    constructor() {
    	super();
    	this.state={ 
    		fruitStore: new LifoFifo(),
    		view: '',
            input: ''  ,  
    	}       
    }

    onInsert = () => {
    console.log('insert');
    let store = this.state.fruitStore;
    store.insert(this.state.input);
	this.setState({
        fruitStore: store,
        view:''
    	})
    }

     onInsertDisplay = () => {
        return (
           <div id='insertItem'>
               <input onChange={this.onChange} id= 'enteritem' type='text' placeholder='Enter a Fruit Item'></input>
               <button onClick={this.onInsert}>Submit</button>
           </div>
        )
    }

  	onChange = (e) => {
        if(e.target.id === 'enteritem') {
            console.log('changing', e.target.value);
            this.setState({
                input: e.target.value
            })
        }
    }

    onStateChange = () => {
		this.setState({
			view: 'add'
		})
    }
    
    onDelLifo = () => {
        console.log('this is for LIFO method');
        let store = this.state.fruitStore;
        store.delLifo();
        this.setState({
            fruitStore: store
        })
    }

	onDelFifo = () => {
        console.log('this is for FIFO method');
        let store = this.state.fruitStore;
        store.delFifo();
        this.setState({
            fruitStore: store
        })
    }   



    render() {
    	 const renderList = this.state.fruitStore.fruitArray.map((item,i) => {
         	return <li key={i}>{item}</li>
        })
       
        return(
            <div>
	            <div>
	                    {this.state.view === 'add' && this.onInsertDisplay()}
	            </div>
	                
	            <div className='displaydiv' >{renderList}</div>
	            <button onClick={this.onStateChange} className="btn btn-outline-primary btn-lg Button_shadow">Insert a fruit</button>
	            <button onClick={this.onDelFifo} className="btn btn-outline-primary btn-lg Button_shadow">First in First out</button>
	            <button onClick={this.onDelLifo} className="btn btn-outline-primary btn-lg Button_shadow">Last in First out</button>
            </div>
        )
    }
}

export default LifoFifoComp