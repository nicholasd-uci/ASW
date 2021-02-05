const Character = require("./Character.js");

class Assassin extends Character {
    constructor(name, hp, mp, weapon, stealth, poison) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.weapon = weapon 
        this.stealth = stealth
        this.poison = poison
    }
}

module.exports = Assassin