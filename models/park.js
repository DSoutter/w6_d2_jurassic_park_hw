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

module.exports = Park;
