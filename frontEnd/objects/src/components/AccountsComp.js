import React from 'react'
import CreateAcct from './CreateAcct'
import './AccountsComp.css'


class AccountsComp extends React.Component {
	constructor(props) {
		super(props)
    	this.state = {
    		newWindow: ""
		}
	}

    onClick = () => {
          this.setState({
            newWindow: <CreateAcct />
            })                 
    }

  render() {
		
		return (
		<div>
		<button id='create' onClick={this.onClick} className="btn btn-outline-primary btn-lg Button_size ">Click to Create New Account with Bank of EvolveU</button>
		{this.state.newWindow}		
		</div>
		)
	}
}

export default AccountsComp;