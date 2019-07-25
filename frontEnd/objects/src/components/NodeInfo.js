import React from 'react'

class NodeInfo extends React.Component {
	constructor() {
       super();
       this.state = {
           view:'',
        }
    }

	onStateChange = () => {
        this.setState({
            view: 'add1'
        })
   	}

	render() {
		return (
			<div className='cardContainer'>
				<form>
					<h5 className='aaa'>This is the Current Node: 
						<span className='bbb'>
						subject: {this.props.linkedList.current.subject};
						amount: {this.props.linkedList.current.amount};
						 </span>
					</h5>					
					
				</form>
				<div>
					<button id='first' onClick={this.props.handleClick} className='btn2'>First Node</button>
					<button id='last' onClick={this.props.handleClick} className='btn2'>Last Node</button>
					<button id='previous' onClick={this.props.handleClick} className='btn2'>Previous Node</button>
					<button id='next' onClick={this.props.handleClick} className='btn2'>Next Node</button>
					<button id='delete' onClick={this.props.handleClick} className='btn2'>Delete Node</button>
				</div>
			</div>
		)
	}
}

export default NodeInfo;