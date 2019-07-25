import React from 'react';
// import CreateCity from "./CreateCity"

class CityList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in cityLst", this.props);
    // id: this.props.id;
    this.state = {
      population: this.props.commObj.population,
      cityArray:this.props.cityArray, 
      // cityName: this.props.cityName,
      amount1:0, 
      showText:'',
                   
    };   
         
  }

  handleAmountChange =(e) =>{
      this.setState({
        amount1: Number(e.target.value),
     })

  }

  movedIn = (id, amount) => {
    // console.log("acctID for deposit", this.props.bankObj.acctID)
    this.props.onMovedin(this.props.commObj.id, this.state.amount1);
    this.setState({
       input1: 0,
    });
    this.props.updatePop() 
  }
    
  movedOut = (id, amount) => {
      // console.log("acctID for withdraw", this.props.bankObj.acctID)
    this.props.onMovedOut(this.props.commObj.id, this.state.amount1);
    this.setState({
       input1: 0,
    });
    this.props.updatePop() 
  }

  delCity = () => {
    this.props.delete(this.props.commObj.id)
  }

  showCity =(id) => {
    // this.props.onShowInfo(this.props.commObj.id)
    this.setState({
      showText: this.props.commObj.show(),
    });
  }

  render(props) {  
    
    return(    
      <div className='cardContainer'>
        <p id='info'>Type: {this.props.commObj.howBig()} </p>
        <p>City Name: {this.props.commObj.name}</p>
        <p>Latitude: {this.props.commObj.latitude}</p>
        <p>Longitude: {this.props.commObj.longitude}</p>
        <p>Population: {this.props.commObj.population}</p>        
        <input 
          id="input1"
          className = "input"
          name="amount" 
          type="number"                        
          placeholder="Enter the amount" 
          onChange={this.handleAmountChange}
        /> 
        <p>         
          <button id="Btn1" onClick={this.movedIn}  className="btn btn-primary btn-lg Button_shadow" > Moved In</button>      
          <button id="Btn2" onClick={this.movedOut}  className="btn btn-primary btn-lg Button_shadow" > Moved Out</button> 
        </p> 
        <button id="BtnDel" onClick={this.delCity} className="btn btn-warning btn-lg Button_shadow" > Delete this city</button>
        
        
      </div> 
    )
  }
}



  
export default CityList;