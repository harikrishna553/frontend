export default class Square {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
    getArea(): number {
        return this.side * this.side;
    }
}

export class Triangle {
    base: number;
    height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }
    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}
