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

Park.prototype.numOfVisitors= function (){
    let count = 0;
    for (dino of this.dinosaurs){
        count += dino.guestsAttractedPerDay
    }
    return count;
}

Park.prototype.annualVisitors = function (){
    return this.numOfVisitors()*365
}

Park.prototype.annualEarnings = function () {
    return this.annualVisitors() * this.price
}

Park.prototype.removeDinoBySpecies = function(species){
    let newDinoList = [];
    for (dino of this.dinosaurs){
        if (dino.species !== species){
            newDinoList.push(dino)
        }
    }
    return newDinoList
};

Park.prototype.dinoDietObject = function(){
    let dietObject = {}
    for (dino of this.dinosaurs){
        if (dietObject.hasOwnProperty(dino.diet)){
            dietObject[dino.diet] = dietObject[dino.diet] +1;
        } else {
            dietObject[dino.diet] = 1;
        }
    }
    return dietObject
}

module.exports = Park;

// to add a new key/value pair 
// dietObject[dino.diet] = 1;