import React, { Component } from 'react';
import math from './math'

class MathComp extends Component {
constructor() {
		super();
		this.state = {
			input1: "",
			input2: "", 
			output: "",
		}
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		}

	
	onChange(e) {
		if(e.target.id === "numA"){		
			this.setState({
				a: Number(e.target.value)
			})} else {
			this.setState({
				b: Number(e.target.value)
				})}
	}

	handleClick(e) {
		let a = this.state.a;
		let b = this.state.b;

		if (e.target.id === "plus") {
			this.setState ({
				output: math.sum(a,b)
			})
		} else if (e.target.id === "minus") {
			this.setState ({
				output: math.difference(a,b)
			})
		} else if (e.target.id === "multiply") {
			this.setState ({
				output: math.multiply(a,b)
			})
		} else if (e.target.id === "divide") {
			this.setState ({
				output: math.divide(a,b)
			})
		} else if (e.target.id === "clear") {
			this.setState ({
				output: ""
			})
	}


}


    render() {
      return (
        <div className= 'container'>
            <button className="btn btn-outline-primary btn-lg Button_shadow">  “Hello World from MathComp” </button>
            <br/>
            <input type="number" onChange={this.onChange} id="numA"></input>
			<br/>
			<input type="number" onChange={this.onChange} id="numB" ></input>
			<br/>
            <button onClick={this.handleClick} className="btn" id="plus">+</button>
			<button onClick={this.handleClick} className="btn" id="minus">-</button>
			<button onClick={this.handleClick} className="btn" id="multiply">x</button>
			<button onClick={this.handleClick} className="btn" id="divide">/</button>
			<button onClick={this.handleClick} className="clrbtn" id="clear">CE</button>
			<br/>
			<input onChange={this.handleClick} className="input" value={this.state.output}></input>
        </div>
      )
    }
}

 export default MathComp