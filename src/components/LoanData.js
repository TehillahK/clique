const LoanData = (props) => {
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
                            <p>k2000</p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>months</p>
                            <p>5 </p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>Amount You Receive</p>
                            <p>k2000</p>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex justify-content-between">
                            <p>Monthly payment</p>
                            <p>k2000</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default LoanData;