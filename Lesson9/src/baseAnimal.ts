// eslint-disable-next-line unicorn/filename-case
import { IAnimal } from './i-animal';

export abstract class BaseAnimal implements IAnimal {

    public constructor(public name: string) {};
    public abstract makeSound(): void;
    public abstract move(): void;
    public eat(food: string): void {
        console.log(`[${this.name}] їсть ${food}.`);
    }
}
