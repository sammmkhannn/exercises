let varyingSize ={
    get size() {
        return Math.floor(Math.random() * 100);
    }
};


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    
    get fahrenhiet() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenhiet(value) {
        this.celsius = (value-32) /1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);

console.log(temp.fahrenhiet);
console.log(temp.celsius);
console.log(Temperature.fromFahrenheit(100));
