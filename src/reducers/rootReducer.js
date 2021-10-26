
const initState ={
    loan:{
        amount:5,
        months:5,
        amountPayable:5,
        monthlyPayment:5
    }
}
export  const rootReducer =(state=initState,action)=>{
    if(action.type==="UPDATE_LOAN"){
        state.loan.amount=action.amount;
        state.loan.months=action.months;
        state.loan.amountPayable=action.receivable;
        state.loan.monthlyPayment= action.repayment;
    }
    return state;
}