const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
const FITNESS_START = 10;

function Pet(name) {
  this.name = name;
  this.age = MINIMUM_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = FITNESS_START;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  }
module.exports = Pet;