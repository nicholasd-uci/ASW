const Character = require("./Character.js");

class Soldier extends Character {
    constructor(name, hp, mp, weapon, rank, banner) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.weapon = weapon 
        this.rank = rank
        this.banner = banner
    }
}

module.exports = Soldier