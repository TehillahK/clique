export class CalculatorModel{
    #amountPayable;
    #amountReceivable;
    #serviceFee;
    #repaymentFee;
    #interest
    constructor(){
        this.#amountPayable=500;
        this.update()
    }

    update(){
        this.#serviceFee=this.#amountPayable*0.1;
        this.#amountReceivable= this.#amountPayable - this.#serviceFee;
        this.#interest=this.#amountPayable*0.1;
        this.#repaymentFee=this.#amountPayable+this.#interest;
    }
    /**
     * @param {number} amount
     */
    set amountPayable(amount){
        this.#amountPayable=amount;
        this.update()
    }
    get serviceFee(){
        return this.#serviceFee;
    }
    get amountRecievable(){
        return this.#amountReceivable;
    }
    get repaymentFee(){
        return this.#repaymentFee;
    }
    get loan(){
        return { amountReceivable:this.amountPayable(),repaymentFee:this.repaymentFee(),serviceFee:this.serviceFee()}
    }
}  
