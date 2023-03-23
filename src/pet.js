const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
const FITNESS_START = 10;

function Pet(name) {
  this.name = name;
  this.age = MINIMUM_AGE;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = FITNESS_START;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.hunger >= MINIMUM_HUNGER + 3) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  if (this.fitness <= 3 && this.hunger >= 5) {
    return "I am hungry AND I need a walk";
  }
  if (this.fitness >= 4 && this.hunger <= 4) {
    return "I feel great!";
  }
  if (this.fitness <= 3) {
    return "I need a walk";
  }
  if (this.hunger >= 5) {
    return "I am hungry";
  }
};

Pet.prototype.haveBaby = function (name) {
  this.children.unshift(new Pet(name));
  return `Congratulations ${this.name} on your child ${this.children[0].name}!`;
};

module.exports = Pet;
