class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(name) {
        console.log(this.name);
    }

    showStats(name, health, speed, strength) {
        console.log(this.name, this.health, this.speed, this.strength);
    }

    drinkSake(amount) {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Angela", 90);

ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();