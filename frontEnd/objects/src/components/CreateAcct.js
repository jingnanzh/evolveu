import React from 'react'
// import Greeting from "./Greeting"
import Accounts from './Accounts'
import AccountList from "./AccountList"
import './AccountsComp.css'

class AccountsComp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	bank:  new Accounts(),
        	acctName:null,
        	Balance:0,
        	maxBalance: 0,
        	minBalance: 0,
        	totBalance: 0,
        }
        this.handleClick = this.handleClick.bind(this)

    }

	handleClick (event) {	       
		if(event.target.id ==="input1"){
			if (event.target.value !== null && event.target.value !=='') {
				this.setState({
					acctName: event.target.value
				});		
				console.log("this account",this.state.acctName)			
			}
			// alert("please type account name");				
		 }
				
		else if(event.target.id ==="input2") {
      this.setState({
  				Balance: event.target.value
  			})
		  }	 
    }

  onDeposit = (id, amount) => {
    console.log('onDeposit', id)
    const arr = this.state.bank;
    arr.depositAccount(id, amount);
    this.setState({
      bank: arr,
    })
  }

  onWithdraw = (acctID, amount) => {
    // console.log('onWithdraw', id)
    const  arr = this.state.bank;
    arr.withdrawAccount(acctID, amount);
    this.setState({
      bank: arr,
    })
  }

  onCreate = ()=> {
       	const accountList= this.state.bank;
        accountList.addAccount(this.state.acctName,this.state.Balance)
    	console.log("oncreate log",accountList)
    	this.setState({
            // counter: this.state.counter + 1,
            maxBalance: accountList.getMaxAccount().Balance,
            minBalance: accountList.getMinAccount().Balance, 
            totBalance: accountList.getTotalBalance(),           
      })	     
	}        

	accountStatus = () => {
		const accountList= this.state.bank;
		this.setState({
            // counter: this.state.counter + 1,
            maxBalance: accountList.getMaxAccount().Balance,
            minBalance: accountList.getMinAccount().Balance,
            totBalance: accountList.getTotalBalance(),    

        })
        console.log("total balance",this.state.totBalance) 

	}

	handleDelete =(acctID) => {         
   	const accountList= this.state.bank;        
   	accountList.delAccount(acctID);
   	this.setState({
      bank: accountList,
		})
		this.accountStatus()
        // console.log("from handleDelete after",this.state.bank)                      
  }

  onChangeName =(id, newName) => {         
    const accountList= this.state.bank;        
    accountList.nameAccount(id, newName);
    this.setState({
      bank: accountList,
    })
    this.accountStatus()
        // console.log("from handleDelete after",this.state.bank)                      
  }


	render() {
		const bankHolder = this.state.bank.acctList;
		console.log("bankHolder", bankHolder)
		const renderList = bankHolder.map(item => {
			return <AccountList key={item.acctID}
								bankObj={item}
								handleDelete= {this.handleDelete}
								updateBalance ={this.accountStatus}
                onDeposit = {this.onDeposit} 
                onWithdraw = {this.onWithdraw}  
                handleChangeName = {this.onChangeName}            
								// handleAccountClick = {this.handleAccountClick}
					/>
		})

      return (
		    <div  className='cardContainer' >		    	           	
            <h3  id="BtnCreateAcct" className="CreateAcct">  Let's creat a new account! </h3>
            	<div>	            	 
            		<div>             			
      						<form>Account Name: 
	                    <input  
                          className= 'input'
	                        id="input1"
	                        name="acctName" 		                                                                 
	                        placeholder="Please name it" 
	                        onChange={this.handleClick}		                        
	                    />
	                    <br/>	                            											
      						  Deposit:
                    <input  
                        className= 'input'
                        id="input2"
                        name="deposit" 
                        type="number"                        
                        placeholder="Please enter $" 
                        onChange={this.handleClick}  
                    />	                   		                    	                  
      	          </form>                  
							     <button id="BtnCreateAcct" onClick={this.onCreate}  className="btn btn-primary btn-lg Button_shadow" > Create New Account </button> 	
						    </div>					
					   <div>	
						<p>Max Balance: ${this.state.maxBalance}</p>			
						<p>Min Balance: ${this.state.minBalance}</p>
						<p>Total Balance: ${this.state.totBalance}</p>
					</div>
			</div>
				{renderList}
     
			</div>
		)
	}
}

export default AccountsComp;