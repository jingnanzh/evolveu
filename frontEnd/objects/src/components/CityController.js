import City from './City'

class CityController {
	constructor() {
		this.cityArray = [];
		this.counter = 0;
	}

	add(name, latitude, longitude, population) {
		const newCity = new City(this.counter,name, latitude, longitude, population);
		this.cityArray.push(newCity);
		this.counter++;
	}

	whichSphere (i) {
		if (this.cityArray[i].latitude > 0) {
			return 'North'
        } else {
			return 'South'
		}
	}

	getMostNorthern(){
		const mostNorth = this.cityArray.reduce((preVal, curVal) => 
        (preVal.latitude > curVal.latitude) ? preVal : curVal)
        return mostNorth.name
	}
	

	getMostSouthern(){
		const mostSouth = this.cityArray.reduce((preVal, curVal) => 
        (preVal.latitude < curVal.latitude) ? preVal : curVal)
        return mostSouth.name
	}

	
	getPopulation() {
		this.totalPoplution = this.cityArray.reduce(function(pop,next) {return pop + next.population;},0)
		return  this.totalPoplution;
	}
	

	showInfo(id) {
        let answer;
        this.cityArray.forEach(item => {
            if(item.id === id) {
                answer = item.show();
                return;
            }
        })
        return answer;
    }


	deleteCity(id) {
        let index = 0;
        this.cityArray.forEach(item => {
            if(item.id === id) {
                this.cityArray.splice(index, 1)
                return
            }
            index++;
        })
    }

    
    commMovedIn(id, people) {
        this.cityArray.forEach(item => {
            if(item.id === id) {
                item.movedIn(people);
                return 
            }
           
        })
    }

    commMovedOut(id,People) {
    	this.cityArray.forEach(item => {
    		if(item.id === id) {
    			item.movedOut(People); 
    			return 
    			 
    		}
    	})

    }

}


export default CityController;