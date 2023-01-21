import Vehicle from "./vehicle";
import { isNumber } from "../types";
import { isString } from "../types";

class Truck extends Vehicle {
    #carryWeight;

    constructor(carryWeight) {
        super(vin, color);

        if (isNumber(carryWeight)) {
            this.#carryWeight = carryWeight
        } else {
            throw Error('you can not create Truck, please use number type for carryWeight')
        }

    }
}