import { isNumber } from "../types";
import { isString } from "../types";

class Vehicle {
    #vin;
    #color;
    constructor(vin, color) {
        if (isNumber(vin)) {
            this.#vin = vin
        } else {
            throw Error('you can not create Vehicle, please use number type for vin')
        }

        if (isString(color)) {
            this.#color = color
        } else {
            throw Error('you can not create Vehicle, please use string type for color')
        }
    }

}

export default Vehicle;