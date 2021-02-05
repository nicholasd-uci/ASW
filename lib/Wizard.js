const Character = require("./Character.js");

class Wizard extends Character {
    constructor(name, hp, mp, weapon, element, summon) {
        super(name, hp, mp, weapon) 
        this. element = element
        this. summon = summon 
    }
}

module.exports = Wizard