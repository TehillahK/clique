import { connect } from "react-redux";
const LoanData = (props) => {
    console.log(props)
    const {amount,months,amountPayable,monthlyPayment} =props;
    return ( 
        <div className="card">
            <div className="card-header">
                    <h2>Loan Application</h2>
                    <p>This Loan is based on your previous entries</p>
                </div>
            <div className="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>Amount</p>
                            <p>k{amount}</p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>months</p>
                            <p>{months}</p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>Amount You Receive</p>
                            <p>k{amountPayable}</p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>Monthly payment</p>
                            <p>k{monthlyPayment}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

const mapStateToProps=(state)=>{
    return{
        amount:state.loan.amount,
        months:state.loan.months,
        amountPayable:state.loan.amountPayable,
        monthlyPayment:state.loan.monthlyPayment
    }
}
 
export default connect(mapStateToProps)(LoanData);