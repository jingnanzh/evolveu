class City {
    constructor(id,name, latitude, longitude, population) {
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `ID: ${this.id}, Name: ${this.name}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`
    }

    movedIn(people) {
        return (this.population= this.population+ Number(people)
        )
    }

    movedOut(people) {
        if (people < this.population) {
            return (this.population = (this.population - Number(people)))
        }
        else {
            return (this.population= 0)
        }
    }

    howBig() {
        if (this.population > 100000) {
            return "City";
        }
        else if (this.population > 19999) {
            return "Large Town";
        }
        else if (this.population > 999) {
            return "Town";
        }
        else if (this.population > 99) {
            return "Village";
        }
        else {
            return "Hamlet";
        }
    }
}

export default City;
