import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Account from './Account'
import Greeting from './Greeting'


const checkingAccount = new Account(1,"checking account", 25);
// checkingAccount.deposit(6)
console.log(checkingAccount.Balance)

class AccountComp extends Component {
constructor() {
        super()
        // this.Balance = 15;
        // this.acctName = "Checking Account";
        this.state ={
           Balance: checkingAccount.Balance
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        // const{amount,value} = event.target
         
        if (event.target.id === "btnDep") {
			let amount = document.getElementById("input1").value
			 console.log(amount)
	         this.setState({
	           Balance: checkingAccount.deposit(amount)
	                              
	         });
        } else if(event.target.id === "btnWit") {
        	let amount = document.getElementById("input2").value
        	console.log(amount)
        	 this.setState({
	           Balance: checkingAccount.withdraw(amount)
	                              
	         });       	
        }
               
    }

	render() {
		return(
			<div className='cardContainer'>
				<h1>  Welcome to the Bank of EvolveU </h1>
                <Greeting />       
                <p>This is your {checkingAccount.acctName} </p> 
            
                <div>Your balance is: 
                    <button className="Button"> {this.state.Balance} </button> 
    	                <p>Deposit: 
    	                    <input 
    	                        id="input1"
    	                        name="deposit" 
                                className= 'input'
    	                        type="number"                        
    	                        placeholder="Please enter the amount" 
    	                    />
    	                     <button id="btnDep" onClick={this.handleClick} className="Button"> Submit </button> 
    			         </p>

                        <p>Withdraw:         
                            <input 
                            	id="input2"
                                name="withdraw" 
                                className= 'input'
                                type="number"                        
                                placeholder="Please enter the amount" 
                            />
                            <button id="btnWit" onClick={this.handleClick} className="Button"> Submit </button> 
                        </p>
                        <br />  
                </div>
		    </div>

			)
	}

}

export default AccountComp;