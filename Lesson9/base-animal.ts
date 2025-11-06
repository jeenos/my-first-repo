import { Animal } from 'src/i-animal';

export abstract class BaseAnimal implements Animal {

    public constructor(public name: string) {};
    public abstract makeSound(): void;
    public abstract move(): void;

    public eat(food: string): void {
        console.log(`${this.name} eats ${food}.`);
    }
}

export function interactionAnimal(animal: Animal): void {
    animal.makeSound();
    animal.move();
}

