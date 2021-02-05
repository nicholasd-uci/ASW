const Character = require("./Character.js");

class Soldier extends Character {
    constructor(name, hp, mp, weapon, rank, banner) {
        super(name, hp, mp, weapon)
        this.rank = rank
        this.banner = banner
    }
}

module.exports = Soldier