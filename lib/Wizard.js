const Character = require("./Character.js");

class Wizard extends Character {
    constructor(name, hp, mp, weapon, element, summon) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.weapon = weapon 
        this. element = element
        this. summon = summon 
    }
}

module.exports = Wizard