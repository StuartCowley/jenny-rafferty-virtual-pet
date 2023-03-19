const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Ted")).toBeInstanceOf(Object);
  });
});

describe("constructor", () => {
  it("sets the name property", () => {
    const pet = new Pet("Ted");

    expect(pet.name).toEqual("Ted");
  });
});

describe("constructor", () => {
  it("has an initial age of 0", () => {
    const pet = new Pet("Ted");

    expect(pet.age).toEqual(0);
  });
});

describe("constructor", () => {
  it("has an initial hunger of 0", () => {
    const pet = new Pet("Ted");

    expect(pet.hunger).toEqual(0);
  });
});

describe("constructor", () => {
  it("has an initial fitness of 10", () => {
    const pet = new Pet("Ted");

    expect(pet.fitness).toEqual(10);
  });
});

describe("isAlive", () => {
  it("checks if the pet is alive", () => {
    const pet = new Pet("Garfield");
    pet.isAlive;

    expect(pet.isAlive).toEqual(true);
  });

  it("returns false if the pets fitness is 0 or less", () => {
    const pet = new Pet("Garfield");

    pet.fitness = 0;
    pet.isAlive;
    expect(pet.isAlive).toEqual(false);

    const pet2 = new Pet("Snoopy");

    pet2.fitness = 8;
    pet2.isAlive;
    expect(pet2.isAlive).toEqual(true);
  });
  it("returns false if the pets hunger is 10 or more", () => {
    const pet = new Pet("Garfield");

    pet.hunger = 12;
    pet.isAlive;
    expect(pet.isAlive).toEqual(false);

    const pet2 = new Pet("Snoopy");

    pet2.hunger = 7;
    pet2.isAlive;
    expect(pet2.isAlive).toEqual(true);
  });
  it("returns false if the pets age is 30 or more", () => {
    const pet = new Pet("Garfield");

    pet.age = 37;
    pet.isAlive;
    expect(pet.isAlive).toEqual(false);

    const pet2 = new Pet("Snoopy");

    pet2.age = 22;
    pet2.isAlive;
    expect(pet2.isAlive).toEqual(true);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Dougal");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it("increments the hunger by 5", () => {
    const pet = new Pet("Dougal");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decreases the fitness by 3", () => {
    const pet = new Pet("Dougal");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("Toto");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("decreases the hunger by 3", () => {
    const pet = new Pet("Brian");

    pet.hunger = 8;
    pet.feed();

    expect(pet.hunger).toEqual(5);
  });
  it("hunger level should not go below 0", () => {
    const pet = new Pet("Brian");

    pet.hunger = 1;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
  it("throws an error if the pet is not alive", () => {
      const pet = new Pet("Brian");
  
      pet.age = 30;
  
      expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
  });

describe("checkUp", () => {
  it("checks if the fitness is 3 or less", () => {
    const pet = new Pet("Lassie");

    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I need a walk");
  });

  it("checks if the hunger is 5 or more", () => {
    const pet = new Pet("Lassie");

    pet.hunger = 7;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I am hungry");
  });

  it("checks if the fitness is 3 or less and if hunger is 5 or more", () => {
    const pet = new Pet("Lassie");

    pet.fitness = 2;
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  });

  it("checks if the fitness is 4 or more and if hunger is 4 or less", () => {
    const pet = new Pet("Lassie");

    pet.fitness = 8;
    pet.hunger = 2;
    pet.checkUp();
    expect(pet.checkUp()).toBe("I feel great!");
  });
});


