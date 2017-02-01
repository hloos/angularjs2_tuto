import { Item } from './Item'

export class Order {
    constructor(
    public id: number,
    public customer: string,
    public items: Item[]){}

    get amount() {
        return this.items.map(item => item.price).reduce((a, b) => a + b, 0);
    }
}