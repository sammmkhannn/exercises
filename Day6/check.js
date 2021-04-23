class Rabbit{
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} Rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("Black");
blackRabbit.speak("I am black");