const Character = require("./Character.js");

class Assassin extends Character {
    constructor(name, hp, mp, weapon, stealth, poison) {
        super(name, hp, mp, weapon) 
        this.stealth = stealth
        this.poison = poison
    }
}

module.exports = Assassin