import { isNumber } from "../types";
import { isString } from "../types";

class Dealer {
    #title;
    #vehicles;

    constructor(title, vehicles) {
        if (isString(title)) {
            this.#title = title
        } else {
            throw Error('you can not create Dealer, please use string type for title')
        }
        this.vehicles = [];
    }

}