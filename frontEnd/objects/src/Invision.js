import React, { Component } from 'react';
import invision from './EvolveU.jpg'

class Invision extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.handleClick= this.handleClick.bind(this)
    }
    
      handleClick(){
        this.setState(prevState=>{
          return{
            isLoggedIn:!prevState.isLoggedIn
            
          }
        })
      }
    render() {
       let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
       return (
        <div className = 'container'>
           <img src={invision} className ="Button" alt="invision" height="80" width="80" onClick={this.handleClick}/>
           <p>Click the EvolveU Logo to  {displayText}</p>
        </div>
       )
        
    }
}


export default Invision