export { StringAttached };
class StringAttached {
    constructor(to, from, item, amount){
        this.to = to;
        this.from = from;
        this.item = item;
        this.amount = amount;
        this.dateCreated = new Date();
    }
}
