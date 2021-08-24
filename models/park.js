const { prototype } = require("mocha")

const Park = function(name, price){
    this.name = name
    this.price = price
    this.dinosaurs = []
}

Park.prototype.addDino = function (dino) {
    this.dinosaurs.push(dino)
}

Park.prototype.numOfDinos = function () {
    return this.dinosaurs.length
}

Park.prototype.removeDino = function (dino) {
    const indexOfDino = this.dinosaurs.indexOf(dino)
    this.dinosaurs.splice(indexOfDino,1)
}

Park.prototype.findBestDino = function() {
    let bestDino = this.dinosaurs[0];
    for (dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > bestDino.guestsAttractedPerDay){
            bestDino = dino
        }
    }
    return bestDino
}

Park.prototype.findBySpecies = function(species){
    let dinoSpecies = [];
    for (dino of this.dinosaurs) {
        if (dino.species === species) {
            dinoSpecies.push(dino)
        }
    }
    return dinoSpecies;
}
module.exports = Park;
