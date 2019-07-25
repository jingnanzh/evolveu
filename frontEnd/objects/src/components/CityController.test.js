import City from './City'
import CityController from './CityController'

test('Test the CityController functions', () => {
	//test constructor
	const CitiesTest = new CityController()
	console.log('CitiesTest', CitiesTest)
	expect(CitiesTest.cityArray.length).toBe(0);

	// const Calgary = new City(1, 'Calgary', 51, -114, 1336000)
	
	CitiesTest.add('Calgary', 51, -114, 1336000)
	expect(CitiesTest.cityArray[0]).toEqual({id:0, name: "Calgary",latitude:51, longitude:-114, population:1336000}) 
	expect(CitiesTest.cityArray.length).toBe(1);
	// const Sydney = new City(2, 'Sydney', -34, 151, 4452000)
	CitiesTest.add('Sydney', -34, 151, 4452000)
	expect(CitiesTest.cityArray[1]).toEqual({id:1, name:'Sydney', latitude: -34, longitude:151, population: 4452000}) 
	
	//test whichSphere
	expect(CitiesTest.whichSphere(0)).toBe('North')
	expect(CitiesTest.whichSphere(1)).toBe('South')

	// getMostNorthern
 	CitiesTest.getMostNorthern()
    expect(CitiesTest.getMostNorthern()).toBe("Calgary")
    // console.log('Northern City:', CitiesTest.mostNorth.name) 

// getMostNorthern
 	CitiesTest.getMostSouthern()
    expect(CitiesTest.getMostSouthern()).toBe("Sydney")
    // console.log('Northern City:', CitiesTest.mostSouth.name) 

//getPopulation
	CitiesTest.getPopulation()
    expect(CitiesTest.getPopulation()).toBe(5788000)
    // console.log('Total Population:', CitiesTest.totalPopulation)

//showInfo
	CitiesTest.showInfo(1)
	expect(CitiesTest.showInfo(1)).toEqual("1, Sydney, -34, 151, 4452000") 
//deleteCity
	CitiesTest.deleteCity(1)
	expect(CitiesTest.cityArray.length).toBe(1);
//commMovedOut
	CitiesTest.commMovedOut(0, 6000)
	expect(CitiesTest.cityArray[0].population).toBe(1330000);
//commMovedIn
	CitiesTest.commMovedIn(0, 6000)
	expect(CitiesTest.cityArray[0].population).toBe(1336000);

//myCity
	const myCity = new City(1, 'myCity', 11, -114, 6666)
	// CitiesTest.add('myCity', 11, 174, 6666);
	const myFav = myCity;
	expect(myCity.population).toBe(6666);
	expect(myFav.population).toBe(6666);
	myCity.population = 10000;
	console.log('population of myCity',myCity.population)
	console.log('population of myFav', myFav.population)

})
