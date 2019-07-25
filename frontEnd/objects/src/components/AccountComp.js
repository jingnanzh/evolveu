import React, { Component } from 'react';
import Account from './Account'
import Greeting from './Greeting'


// checkingAccount.deposit(6)
// console.log(checkingAccount.Balance)

class AccountComp extends Component {
constructor() {
        super()
        // this.Balance = 15;
        // this.acctName = "Checking Account";
        this.checkingAccount = new Account(1,"", 0);
        this.state ={
           Balance: this.checkingAccount.Balance
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        // const{amount,value} = event.target
         
        if (event.target.id === "btnDep") {
			let amount = document.getElementById("input1").value
			 console.log(amount)
	         this.setState({
	           Balance: this.checkingAccount.deposit(amount)
	                              
	         });
        } else if(event.target.id === "btnWit") {
        	let amount = document.getElementById("input2").value
        	console.log(amount)
        	 this.setState({
	           Balance: this.checkingAccount.withdraw(amount)
	                              
	         });       	
        }
               
    }

	render() {
		return(
			<div>
				<h1 className="btn btn-outline-primary btn-lg Button_size" >  Welcome to Bank of EvolveU </h1>
                 <div className='cardContainer'>
                    <p className="display-5">  <Greeting /> Your balance is: 
                    <button className="btn btn-info"> {this.state.Balance} </button> 
    	            </p>
                    <p >Deposit: 
                        <input 
                            id="input1"
                            className= 'input'
                            name="deposit" 
                            type="number"                        
                            placeholder="Please enter $" 
                        />
                         <button id="btnDep" onClick={this.handleClick} className="btn btn-primary btn-lg"> Submit </button> 
    				</p>
                    <br />  
                    <p>Withdraw:         
                        <input 
                        	id="input2"
                            className= 'input'
                            name="withdraw" 
                            type="number"                        
                            placeholder="Please enter $" 
                        />
                        <button id="btnWit" onClick={this.handleClick} className="btn btn-primary btn-lg"> Submit </button> 
                    </p>
                    <br />  
                </div>
			</div>

			)
	}

}

export default AccountComp;