import { isNumber } from "../types";
import { isString } from "../types";

class Vehicle {
    #vin;
    #color;
    constructor(vin, color) {
        this.#vin = vin;
        this.#color = color;
    }
    
}

export default Vehicle;