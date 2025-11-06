export interface IAnimal {
    name: string;
    makeSound(): void;
    move(): void;
    eat(food: string): void;
}

