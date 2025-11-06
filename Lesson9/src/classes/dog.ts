import { BaseAnimal } from 'src/baseAnimal';

export class Dog extends BaseAnimal {
    public makeSound(): void {
        console.log(`[${this.name}] каже: Гав-гав!`);
    }

    public move(): void {
        console.log(`[${this.name}] біжить на чотирьох лапах.`);
    }
}
