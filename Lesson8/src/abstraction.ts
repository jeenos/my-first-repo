export abstract class Device {
    public constructor(
        protected id?: string,
        protected name?: string
    ) {}

    public abstract getDescription(): string;

    public turnOn(): void {
        console.log(`${this.name} is turn ON now.`);
    }
}

export class Specifications {
    public constructor(
        public color: string,
        public capacity: string,
        public brand?: string
    ) {}

    public getSpecification(): string {
        return `Color: ${this.color}, Capacity: ${this.capacity}${this.brand ? `, Brand: ${this.brand}` : ''}`;
    }
}

export class Smartphone extends Device {
    public constructor(
        id: string,
        name: string,
        private specs: Specifications
    ) {
        super(id, name);
    }

    public getDescription(): string {
        return `Smartphone ${this.name} ID: ${this.id} — ${this.specs.getSpecification()}`;
    }
}

export class Laptop extends Device {
    public constructor(
        id: string,
        name: string,
        private specs: Specifications
    ) {
        super(id, name);
    }

    public getDescription(): string {
        return `Laptop ${this.name} ID: ${this.id} — ${this.specs.getSpecification()}`;
    }
}
