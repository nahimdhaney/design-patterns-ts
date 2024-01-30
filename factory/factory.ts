

// Factory Method Pattern
// Factory method pattern lets a class defer instantiation to subclasses.
// example of the factory method pattern   
interface IAnimal {
    speak();
}

class Dog implements IAnimal {
    speak() {
        console.log('Woof!');
    }
}
class Cat implements IAnimal {
    speak() {
        console.log('Meow.');
    }
}

class AnimalFactory {
    getAnimal(animal: string): IAnimal {
        if (animal === 'dog') {
            return new Dog();
        } else if (animal === 'cat') {
            return new Cat();
        }
        throw new Error('Animal not found.');
    }
}

let animalFactory = new AnimalFactory();
let dog = animalFactory.getAnimal('dog');
dog.speak();
let cat = animalFactory.getAnimal('cat');
