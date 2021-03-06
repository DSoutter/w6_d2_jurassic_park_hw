const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('T-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 10);
    dino3 = new Dinosaur('Triceratops', 'herbivore', 40);
    dino4 = new Dinosaur('Stegosaurus', 'omnivore', 30);
    dino5 = new Dinosaur('Pterodactyl', 'carnivore', 20);

    park = new Park('Jurassic Park', 200)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });
  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 200)
  });

  it('should have a collection of dinosaurs', function(){
  park.addDino(dino1);
  park.addDino(dino2);
  park.addDino(dino3);
  park.addDino(dino4);
  park.addDino(dino5);
  
  const actual = park.numOfDinos()
  assert.strictEqual(actual, 5)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    
    const actual = park.numOfDinos()
    assert.strictEqual(actual, 1)
    });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino5);
    
    park.removeDino(dino2)
    const actual = park.numOfDinos()
    assert.strictEqual(actual, 4)
  });
  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino5);
    
    const actual = park.findBestDino().species;
    assert.strictEqual(actual, 'T-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino4);
    park.addDino(dino5);

    const actual = park.findBySpecies('T-rex').length
    assert.strictEqual(actual, 3)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino5);

    const actual = park.numOfVisitors()
    assert.strictEqual(actual, 150)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino5);

    const actual = park.annualVisitors()
    assert.strictEqual(actual, 54750)
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDino(dino2);

    const actual = park.annualEarnings()
    assert.strictEqual(actual, 730000)
});

  it('should be able to remove all dinos by a species', function() {
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino4);
    park.addDino(dino5);

    const actual = park.removeDinoBySpecies('T-rex')
    assert.deepStrictEqual(actual, [dino4, dino5])

  })

  it('should be able to create object of different diet types of the dinos', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino5);

    const actual = park.dinoDietObject()
    assert.deepStrictEqual(actual, {'carnivore': 3, 'herbivore': 1, 'omnivore': 1 })

  })

});
