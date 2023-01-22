function isNumber(value) {
    return Number.isInteger(value);
}

function isString(value) {
    return typeof value === "string";
}

class Dealer {

    #title;
    #vehicles;

    constructor(title) {

        if (isString(title)) {
            this.#title = title
        } else {
            throw Error('you can not create Dealer, please use string type for title')
        }
        this.#vehicles = [];
    }

    get title() {
        return this.#title
    }

    set title(title) {
        this.#title = title;
    }

    get vehicles() {
        return this.#vehicles
    }


    addVehicle(vehicle) {

        return new Promise((resolve, reject) => {

            if (!vehicle instanceof Vehicle) {
                reject('not vehicle')
            }

            setTimeout(() => {

                if (this.#vehicles.filter((item) => item.vin === vehicle.vin).length !== 0) {
                    reject(`этот вин ${vehicle.vin} уже есть у диллера`)
                    return;
                }

                this.#vehicles.push(vehicle);
                resolve(true);
            }, 500);
        })
    };



    sellVehicle(vin) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.#vehicles.filter((item) => item.vin === vin).length === 0) {
                    reject('no vehicle');
                }

                if (!isNumber(vin)) {
                    reject('please use number type');
                }

                this.#vehicles.push(vehicle);
                resolve(true);
            }, 500);
        })
    }


    findTruck(carryWeight, color) {
        return new Promise((resolve, reject) => {
            if (!isNumber(carryWeight)) {
                throw new Error('please use number type')
            }

            if (!isString(color)) {
                throw new Error('please use string type')
            }

            setTimeout(() => {
                const truck = this.#vehicles.find((item) => item instanceof Truck && item.color == color && item.carryWeight == carryWeight);

                if (truck) {
                    resolve(truck);
                } else {
                    reject('can not find this truck');
                }
            }, 500)
        })
    }



    paintBus(vin, color) {
        return new Promise((resolve, reject) => {
            if (!isString(color)) {
                reject('please use string type')
            }

            setTimeout(() => {
                const bus = this.#vehicles.find((item) => item instanceof Bus && item.vin === vin);
                if (bus) {
                    bus.color = color;
                    resolve();
                } else {
                    reject('bus not found');
                }
            }, 500);
        })
    }



    countVehiclesWithColor(color) {
        return new Promise((resolve, reject) => {
            if (!isString(color)) {
                reject('please use string type')
            }

            setTimeout(() => {
                resolve(this.#vehicles.filter(item => item.color === color).length)
            }, 500)
        })
    }

}

class Vehicle {
    #vin;
    #color;
    constructor(vin, color) {
        this.#vin = vin
        this.#color = color
    }

    get vin() {
        return this.#vin
    }
    get color() {
        return this.#color
    }

    set vin(vin) {
        this.#vin = vin;
    }
    set color(color) {
        if (typeof color !== 'string') {
            throw Error('you can not create Vehicle, please use string type for color')
        }

        this.#color = color;
    }

}

class Truck extends Vehicle {
    #carryWeight;

    constructor(vin, color, carryWeight) {
        super(vin, color);

        if (isNumber(carryWeight)) {
            this.carryWeight = carryWeight
        } else {
            throw Error('you can not create Truck, please use number type for carryWeight')
        }

    }

    get carryWeight() {
        return this.#carryWeight
    }

    set carryWeight(carryWeight) {
        this.#carryWeight = carryWeight;
    }

}

class Bus extends Vehicle {
    #maxPassengers;
    constructor(vin, color, maxPassengers) {
        super(vin, color);

        if (isNumber(maxPassengers)) {
            this.maxPassengers = maxPassengers
        } else {
            throw Error('you can not create Bus, please use number type for maxPassengers')
        }
    }

    get maxPassengers() {
        return this.#maxPassengers
    }

    set maxPassengers(maxPassengers) {
        this.#maxPassengers = maxPassengers;
    }




}

const DATABASE = {
    dealer: {
        title: 'Trucks & Buses Vilnius LTD'
    },
    trucks: [
        {
            vin: 1112,
            color: 'Red',
            carryWeight: 10
        },
        {
            vin: 2332,
            color: 'Yellow',
            carryWeight: 20
        },
        {
            vin: 5234,
            color: 'Green',
            carryWeight: 70
        }
    ],
    buses: [
        {
            vin: 1112,
            color: 'Green',
            maxPassengers: 50
        },
        {
            vin: 6543,
            color: 'Yellow',
            maxPassengers: 25
        }
    ]
}

const dealer = new Dealer(DATABASE.dealer.title);



console.log('1. создание экземпляров классов по БД')

const buses = DATABASE.buses.map(bus => new Bus(bus.vin, bus.color, bus.maxPassengers)) // каждый элемент массива из тестовой базы данных переводим в экземпляр класса Bus. Сохраняем полученный массив в переменную buses 

const trucks = DATABASE.trucks.map(truck => new Truck(truck.vin, truck.color, truck.carryWeight)) // каждый элемент массива из тестовой базы данных переводим в экземпляр класса Truck. Сохраняем полученный массив в переменную trucks 

for (let i = 0; i < trucks.length; i++) {
    dealer.addVehicle(trucks[i]).catch(console.error);
}

for (let i = 0; i < buses.length; i++) {
    dealer.addVehicle(buses[i]).catch(console.error);
}





setTimeout(() => {
    console.log(dealer.vehicles);
    dealer.findTruck(10, 'Red').then(truck => {
        dealer.sellVehicle(truck.vin).catch(console.error);
    }).catch(console.error)
}, 2000)