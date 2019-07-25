import React, { Component } from 'react';
import bank from './bank.jpg'
import cal from './cal.jpg'
import Community from './Community.jpg'
import EvolveU from './EvolveU.jpg'
import linked from './linked.jpg'
import fruitStore from './fruitStore.jpg'
import MathComp from "./MathComp"
import AccountComp from './AccountComp'
import AccountsComp from './AccountsComp'
import CommComp from './CommComp'
import LinkedListComp from './LinkedListComp'
import LifoFifo from './LifoFifoComp'
import './Button.css'


class Icons extends Component {
    constructor() {
      super()
      this.state ={
        myState: ""
      }
    }
    onPushMe = (e) => {
        if (e.target.id==="cal"){
            this.setState({
            myState: <MathComp />
            })
        } else if (e.target.id==="bank"){
            this.setState({
                myState: <AccountComp />
            }) 
        } else if (e.target.id==="eb"){
              this.setState({
                myState: <AccountsComp/>
              })
        }  else if (e.target.id==="Community"){
              this.setState({
                myState: <CommComp/>
              })
        } else if (e.target.id==="linked"){
              this.setState({
                myState: <LinkedListComp/>
              })
        } else if (e.target.id==="lifoFifo"){
              this.setState({
                myState: <LifoFifo />
              })
        } 
         

      }
    
     
    render() {
      
       return (
        <div className='container'>
          <div className= 'jumbotron'>
          

            <img src={cal} id="cal" className="Button" alt="calculation icon" height="60" width="60" onClick={this.onPushMe}/>
            <img src={bank} id="bank" className="Button" alt="bank icon" height="60" width="60"onClick={this.onPushMe}/>
            <img src={EvolveU} id="eb" className="Button" alt="EvolveU icon" height="60" width="60" onClick={this.onPushMe}/>
            <img src={Community} id="Community" className="Button" alt="Community icon" height="60" width="60" onClick={this.onPushMe}/>
            <img src={linked} id="linked" className="Button" alt="linked list icon" height="60" width="60" onClick={this.onPushMe}/>
            <img src={fruitStore} id="lifoFifo" className="Button" alt="LifoFifo icon" height="60" width="60" onClick={this.onPushMe}/>
                   
                   {this.state.myState}
          </div>

        </div>
       )
        
    }
}
export default Icons