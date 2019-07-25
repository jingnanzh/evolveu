import React from 'react'
import LinkedList from './LinkedList'
import NodeInfo from './NodeInfo'
import './ListComp.css';



class LinkedListComp extends React.Component {
 	constructor() {
       super();
       this.arrList = [];
       this.state = {
           list: new LinkedList(),
           view:'',
           inputSubject: null,
           inputAmount: 0,
           current:'',
           result:0,
           createNode: false,
       }
       
   	}

    onChange = (e) => {
        if (e.target.id === 'subject') {
            console.log('input subject', e.target.value);
            this.setState({
                inputSubject: e.target.value
            })
        } else if (e.target.id === 'amount') {
            console.log('input amount', Number(e.target.value));
            this.setState({
                inputAmount: Number(e.target.value)
           })
       }
   }

    onInsertAfter = () => {
       console.log('Create the first node');
       let list = this.state.list;
       list.insertAfter(this.state.inputSubject, this.state.inputAmount);
       console.log(list);
       this.setState({
           list: list,
           view: '',        
       })
    }

    onInsert = () => {
        return (
           <div id='insertinfo' >
               <input onChange={this.onChange} id='subject'type='text' placeholder='Enter Subject'></input>
               <input onChange={this.onChange} id='amount' type='number' placeholder='Enter Amount'></input>
               <button onClick={this.onInsertAfter}>Insert</button>
           </div>
        )
    }


   	handleClick = (e) => {
		let n = e.target.id
		switch(n) {
						
			case 'first':
				const temp2 = this.state.list
				temp2.jumpToHead()
				this.setState({linkedList: temp2})
			break;
			
			case 'last':
				const temp3 = this.state.list
				temp3.jumpToTail()
				this.setState({linkedList: temp3})
			break;
		
			case 'next':
				const temp4 = this.state.list
				temp4.moveToNext()
				this.setState({linkedList: temp4})
			break;
		
			case 'previous':
				const temp5 = this.state.list
				temp5.moveForward()
				this.setState({linkedList: temp5})
			break;

			case 'delete':
				const temp6 = this.state.list
				temp6.delete()
				this.setState({linkedList: temp6})
			break;
			default:
		}
	}


	onStateChange = () => {
        this.setState({
            view: 'add1'
        })
   	}

	render() {  
		return(
			<div>  				

       	<div className='classDiv4'>
           <button id='btn1' onClick={this.onStateChange} className="btn btn-outline-primary btn-lg Button_size">Let's Insert the node for the LinkedList!</button>
        </div>
        <div>
            {this.state.view === 'add1' && this.onInsert()}
        </div>
   			<div>
   			  {this.state.list.head != null &&
    			<NodeInfo 
    				linkedList = {this.state.list}
    				handleClick = {this.handleClick}
    				onChange ={this.onChange} 
    			/>}                    
   			</div>
			</div>
		)
	} 
}

export default LinkedListComp;
