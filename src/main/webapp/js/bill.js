export { Bill };
class Bill {
    constructor(name, amount, users){
        this.name = name;
        this.amount = amount;
        this.users = users;
    }

    getNumberOfUsersAttached(){
        return this.users.length;
    }
    stringAttached(to, from, amount, split){
        //split will be boolean so user can set custom or full amount and split accordingly
    }
}