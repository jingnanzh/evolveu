import React from 'react';

class AccountList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in accoutnlist", this.props);
    // acctID : this.props.account.acctID;
    this.state = {
      Balance: this.props.bankObj.Balance,
      acctList:this.props.acctList, 
      acctName: this.props.acctName,
      amount1:0,              
    };   
    // this.handleClick = this.handleClick.bind(this)   
        
  }

  handleAmountChange =(e) =>{
      this.setState({
        amount1: Number(e.target.value),
     })

  }

  handleNewname =(e) =>{
      this.setState({
        acctName: e.target.value,
     })

  }

  handleRename = (id, newName) => {
      // console.log("acctID for withdraw", this.props.bankObj.acctID)
    this.props.handleChangeName(this.props.bankObj.acctID, this.state.acctName);
    // this.props.updateBalance() 
  }

  deposit = (id, amount) => {
    console.log("acctID for deposit", this.props.bankObj.acctID)
    this.props.onDeposit(this.props.bankObj.acctID, this.state.amount1);
    this.setState({
       input1: 0,
    });
    this.props.updateBalance() 
  }
    
  withdraw = (id, amount) => {
      // console.log("acctID for withdraw", this.props.bankObj.acctID)
    this.props.onWithdraw(this.props.bankObj.acctID, this.state.amount1);
    this.setState({
       input1: 0,
    });
    this.props.updateBalance() 
  }

  render(props) {  
      
    return(    
      <div className = "acctInfoContainer">
        <p>Account Name: {this.props.bankObj.acctName}</p>
        <p>Balance: {this.props.bankObj.Balance}</p>        
        <input 
          id="input1"
          name="amount" 
          type="number"                        
          placeholder="Please enter the amount" 
          onChange={this.handleAmountChange}
        /> 
        <p>       
          <button id="BtnDep" onClick={this.deposit}  className="btn btn-primary Button_shadow"  > Deposit</button>

          <button id="BtnWit" onClick={this.withdraw}  className="btn btn-primary Button_shadow" > Withdraw</button> 
        </p> 
        <button id="BtnDel" onClick={this.props.handleDelete}  className="btn btn-primary Button_shadow" > Delete </button>
        <input 
          id="input2"
          className="input"
          name="newName"                
          placeholder="Please enter the new name" 
          onChange={this.handleNewname}
        /> 
        <button id="BtnRn" onClick={this.handleRename}  className="Button" > Rename </button>
      </div> 
    )
  }
}



  
export default AccountList;