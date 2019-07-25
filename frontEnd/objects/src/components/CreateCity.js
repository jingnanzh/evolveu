import React from 'react'
import CityController from './CityController'
import CityList from "./CityList"
import './AccountsComp.css'

class CreateCity extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	community:  new CityController(),
        	name:null,
        	latitude: null, 
            longitude: null, 
            population:0,
        	mostNorthern: '',
        	mostSouthern: '',
        	totPop: 0,
            output: null,
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick (event) {          
        if(event.target.id ==="name"){
                this.setState({
                    name: event.target.value
                });     
                console.log("this account",this.state.name)         
        }
            // alert("please type account name");               
                         
        else if(event.target.id ==="latitude") {
            this.setState({
                latitude: event.target.value
            });
        }  
        else if(event.target.id ==="longitude") {
                this.setState({
                longitude: event.target.value
            });
        } 
        else if(event.target.id ==="population") {
                this.setState({
                population:  Number(event.target.value)
            });
        } 
        
    }

    onMovedIn = (id, amount) => {
        console.log('onMovein', id)
        const arr = this.state.community;
        arr.commMovedIn(id, amount);
        this.setState({
          community: arr,
        })
      }

    onMovedOut = (id, amount) => {
        // console.log('onWithdraw', id)
        const  arr = this.state.community;
        arr.commMovedOut(id, amount);
        this.setState({
          community: arr,
        })
    }

    onCreate = ()=> {
        const commObj= this.state.community;
        commObj.add(this.state.name,this.state.latitude, this.state.longitude, this.state.population)
        console.log("oncreate log", commObj)
        // console.log('most Southern:',this. state.mostSouthern )
        this.setState({
            counter: this.state.counter + 1,
            mostNorthern: commObj.getMostNorthern(),
            mostSouthern: commObj.getMostSouthern(), 
            totPop: commObj.getPopulation(),           
      })         
    }        

    popStatus = () => {
        const commObj= this.state.community;
        this.setState({
            // counter: this.state.counter + 1,
            totPop: commObj.getPopulation(),  
        })
        // console.log("total population",this.state.totPop) 

    }

    handleDelete =(id) => {         
        const commObj= this.state.community;       
        commObj.deleteCity(id);
        this.setState({
          community: commObj,
        })
        this.popStatus()
        // console.log("from handleDelete after",this.state.bank)                      
    }

    onShowInfo = (id) => {
        const commObj= this.state.community;       
        let info = commObj.showInfo(id);
        console.log(info);
        this.setState({
            output: info,
        })
        
    }

    render() {
        const cityHolder = this.state.community.cityArray;
        // console.log("bankHolder", bankHolder)

        const renderList = cityHolder.map(item => {
            return <CityList key={item.id}
                             commObj={item}
                             delete= {this.handleDelete}
                             updatePop ={this.popStatus}
                             onMovedin = {this.onMovedIn} 
                             onMovedOut = {this.onMovedOut}  
                             onShowInfo = {this.onShowInfo}
                             output = {this.state.output}
                    />
        })

      return (
            <div className='cardContainer'>                            
                <h1  id="BtnCreateAcct" className="CreateAcct">  Let's create a new community! </h1>
                <div>                  
                    <div  className= 'typeSelect' >                         
                        <form className="form-group">Community Name: 
                            <input className= 'input'
                                id="name"
                                name="cityName"                                                                          
                                placeholder="Community name" 
                                onChange={this.handleClick}                             
                            />
                            <br/>                                                                           
                            Latitude:
                            <input className= 'input'
                                id="latitude"
                                name="latitude" 
                                type="number"                        
                                placeholder="Enter the latitude" 
                                onChange={this.handleClick}  
                            />         
                            <br/>                                                                           
                            Longitude:
                            <input className= 'input'
                                id="longitude"
                                name="longitude" 
                                type="number"                        
                                placeholder="Enter the longitude" 
                                onChange={this.handleClick}  
                            />    
                            <br/>                                                                           
                            Population:
                            <input className= 'input'
                                id="population"
                                name="population" 
                                type="number"                        
                                placeholder="Enter the population" 
                                onChange={this.handleClick}  
                            />                                                             
                        </form>                  
                        <button id="BtnCreateCity" onClick={this.onCreate}  className="btn btn-primary btn-lg" > Create New City </button>                      
                    </div>   
                    <div>   
                        <p>Most Southern Community: {this.state.mostSouthern}</p>            
                        <p>Most Northern Community: {this.state.mostNorthern}</p>
                        <p>Total Population: {this.state.totPop}</p>
                    </div>           
                </div>
               {renderList}
            </div>
        )
    }

}

export default CreateCity;