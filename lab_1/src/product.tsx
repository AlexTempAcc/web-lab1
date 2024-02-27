class Product {
    constructor(public name: string, public unitPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
    getDiscountedPrice(discount: number): number {
        return this.unitPrice - discount;
    }
}
