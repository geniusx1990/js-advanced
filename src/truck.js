import Vehicle from "./vehicle";
import { isNumber } from "../types";
import { isString } from "../types";

class Truck extends Vehicle {
    #carryWeight;

    constructor(carryWeight) {
        super(vin, color);
        this.#carryWeight = carryWeight;
    }
}