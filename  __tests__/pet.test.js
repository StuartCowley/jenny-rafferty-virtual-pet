const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });

describe('constructor', () => {
    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });

describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });
  });

describe('constructor', () => {
    it('has an initial fitness of 10', () => {
      const pet = new Pet('Fido');
  
      expect(pet.fitness).toEqual(10);
    });
  });

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });
      it('decreases the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });
  });

describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('checkUp', () => {
    it('checks if the fitness is 3 or less', () => {
      const pet = new Pet('Fido');

      pet.fitness = 3;
      pet.checkUp();
      expect(pet.checkUp()).toBe('I need a walk')
    });

    it('checks if the hunger is 5 or more', () => {
        const pet = new Pet('Fido');
  
        pet.hunger = 7;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry')
      });

      it('checks if the fitness is 3 or less and if hunger is 5 or more', () => {
        const pet = new Pet('Fido');
        
        pet.fitness = 2;
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
      });
      it('checks if the fitness is 4 or more and if hunger is 4 or less', () => {
        const pet = new Pet('Fido');
        
        pet.fitness = 8;
        pet.hunger = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great!')
      });
  });