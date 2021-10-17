class LoanModel{
    #amount;
    #months;
    #serviceFee;
    #amountReceivable;
    #monthlyRepayment;
    constructor(amount,months,serviceFee,amountReceivable){
        this.#amount=amount;
        this.months=months;
        this.#serviceFee=serviceFee;
        this.amountReceivable=amountReceivable;
    }
}