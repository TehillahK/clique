export class CalculatorModel{
    #amountPayable;
    #amountReceivable;
    #serviceFee;
    #repaymentFee;
    #interest
    #rate
    #months
    #nextPaymentDate
    constructor(){
        const today= new Date();
       
        this.#months=1;
        this.#amountPayable=500;
        this.#nextPaymentDate=new Date(today.getFullYear(), today.getMonth()+1, 0);
        this.update()
    }

    update(){
        this.#serviceFee=this.#amountPayable*0.1;
        this.#amountReceivable= this.#amountPayable - this.#serviceFee;
        this.#rate=(0.0354 * this.#months)+ 0.1442
        this.#interest=this.#amountPayable*this.#rate;
        const repayment=this.#amountPayable + this.#interest;
        this.#repaymentFee=repayment/this.#months;
    }
    /**
     * @param {number} amount
     */
    set amountPayable(amount){
        this.#amountPayable=amount;
        this.update()
    }
    /**
     * @param {number} months
     */
    set months(months){
        this.#months=months ;
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
    get nextPaymentDate(){

        const result=new Date(this.#nextPaymentDate)
        const date= `${result.toString().split(' ')[1]} ${result.toString().split(' ')[2]} ${result.toString().split(' ')[3]}` ;
        return date;
    }
}  
