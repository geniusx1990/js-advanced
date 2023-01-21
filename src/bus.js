import Vehicle from "./vehicle";
import { isNumber } from "../types";
import { isString } from "../types";

class Bus extends Vehicle {
    #maxPassengers;
    constructor(maxPassengers) {
        super(vin, color);

        if (isNumber(maxPassengers)) {
            this.#maxPassengers = maxPassengers
        } else {
            throw Error('you can not create Bus, please use number type for maxPassengers')
        }
    }

}