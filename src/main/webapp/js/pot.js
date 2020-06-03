export { Pot };
class Pot {
    constructor(billGroup){
        this.billGroup = billGroup;
    }
    getBills(){
        return this.billGroup.bills;
    }
    getBillTotal(){
        var total = 0;
        this.billGroup.bills.forEach(function(bill){
            total = total += parseInt(bill.amount);
        });
        return total;
    }
}