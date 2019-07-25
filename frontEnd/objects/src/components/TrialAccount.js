import React, { Component } from 'react'
import './Account.css'
import Greeting from './Greeting'
import './Button.css'

const data={
    accounts: [
        {name: "Jing", balance:25}
    ]
}

class Account extends Component {
    constructor() {
        super()
        this.initialBalance = 25;
        this.accountName = "Checking Account";
        this.state ={
           Balance: Number(this.initialBalance)
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const{name,value} = event.target
        console.log(name)
        name === "deposit" ?
         this.setState(prevState => {
            return {
                Balance: prevState.Balance + Number(value)
            }
         })
         :
         this.setState(prevState => {
            return {
                Balance: prevState.Balance - Number(value)
            }
         })
    }

    render() {

      return (
        <div className="Main">
            <h1>  Welcome to Bank of EvolveU </h1>
            <Greeting /> 
           
            <p>This is your {this.accountName} </p>
            
            <p>Your initial balance is: 
                <button className="Button"> {this.initialBalance} </button> 
            </p>
                <p>Deposit:</p>
                    <input 
                        id="input1"
                        name="deposit" 
                        type="number"
                        onChange={this.handleClick} 
                        placeholder="Please enter the deposit" 
                    />
                <p>Withdraw:</p>         
                    <input 
                        name="withdraw" 
                        type="number"
                        onChange={this.handleClick} 
                        placeholder="Please enter the withdrawal" 
                    />
                    <br />           
                <button onClick={this.handleClick} className="Button"> Submit </button> 
                <p>Your new balance is: {this.state.Balance}  </p>         
        </div>
      )
    }
}
export default Account