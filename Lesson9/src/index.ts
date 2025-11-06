import { IAnimal } from './i-animal';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseAnimal } from './baseAnimal';
import { Dog } from './classes/dog';
import { Cat } from './classes/cat';

const dog = new Dog('Pes');
const cat = new Cat('Kit');

dog.makeSound();
dog.move();
dog.eat('pringles');

cat.makeSound();
cat.move();
cat.eat('kit-cat');

export function interactionAnimal(animal: IAnimal): void {
    animal.makeSound();
    animal.move();
}

interactionAnimal(dog);
interactionAnimal(cat);

