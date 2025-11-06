import { BaseAnimal } from 'src/baseAnimal';

export class Cat extends BaseAnimal {
    public makeSound(): void {
        console.log(`${this.name} says: Miay!`);
    }

    public move(): void {
        console.log(`${this.name} move forward `);
    }
}
