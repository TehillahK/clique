import { useState,useRef, createContext, useContext } from "react";

import { connect } from "react-redux";
import {
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { CalculatorModel } from "../models/CalculatorModel";
import LoanModal from "./LoanModal";
const AmountContext = createContext();



function Header() {
  return (
    <div className={"card-header d-flex justify-content-center align-items-center bg-primary"} style={{height:"6rem"}}>
      <h4 className="text-white ">How Much Do You Need?</h4>
    </div>
  );
}
function Sliders(props) {
  const showMonths = props.showMonths;
  const changeAmount = useContext(AmountContext);
  const changeMonths=props.changeMonths;
  return (
    <div className="flex flex-column">
      <div>
        <p>How much would you like?</p>
        <Slider
          valueLabelDisplay="auto"
          onChange={(e, val) => {
            changeAmount(val);
          }}
          step={200}
          min={500}
          max={50000}
        />
      </div>
      <div>
          <div>
            <p>For how many months?</p>
            <Slider valueLabelDisplay="auto" 
                    min={1}
                    max={12} 
                    onChange={
                      (e,val)=>{
                         changeMonths(val)
                      }
                    }
             />
          </div>
      </div>
    </div>
  );
}
function LoanType(props) {
  const loanType = props.loanType;
  const updateLoanType = props.updateLoanType;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        What type of loan would you like?
      </FormLabel>
      <RadioGroup
        aria-label="loan"
        defaultValue="salary"
        name="radio-buttons-group"
        value={loanType}
        onChange={(event) => {
          updateLoanType(event.target.value);
        }}
      >
        <FormControlLabel
          value="salary"
          control={<Radio />}
          label="Salary advances"
        />
        <FormControlLabel
          value="collateral"
          control={<Radio />}
          label="Collateral Backend"
        />
        <FormControlLabel
          value="instant"
          control={<Radio />}
          label="instant loans"
        />
      </RadioGroup>
    </FormControl>
  );
}

function Estimates(props) {
  const serviceFee = props.serviceFee;
  const repayment = props.repayment;
  const amountReceivable = props.amountRecievable;
  const date =props.date;
  return (
    <div className={"flex flex-column estimates"}>
      <div className={"flex flex-row space-between  estimate"}>
        <p>Amount You Receive</p>
        <p>K{amountReceivable}</p>
      </div>
      <div className={"flex flex-row space-between  estimate"}>
        <p>Repayment</p>
        <p>K{repayment}</p>
      </div>
      <div className={"flex flex-row space-between"}>
        <p>Next Payment Date</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
function SubmitButton(props) {
  const amount = props.amount;
  const months = props.months;
  const receivable=props.receivable;
  const updateLoan=props.updateLoan;
  const handleClick=()=>{
      updateLoan(amount,months,receivable)
  }
  return (
    <div className={"d-grid gap-2"}>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={
          handleClick
        }
      >
        Check eligibility
      </button>
    </div>
  );
}

const Calculator = (props) => {
  const calcModel = new CalculatorModel();
  const closeBtn= useRef();
  const updateLoan = props.updateLoan;
  const [months,setMonths]=useState();
  const [showMonths, setShowMonths] = useState(false);
  const [loanType, setLoanType] = useState("salary");
  const [amountPayable, setAmountPayable] = useState(500);
  const [serviceFee, setServiceFee] = useState(calcModel.serviceFee);
  const [amountRecievable, setAmountRecievable] = useState(
    calcModel.amountRecievable
  );
  const [repayment, setRepayment] = useState(calcModel.repaymentFee);
  const [dueDate,setDueDate]=useState(
    calcModel.nextPaymentDate
  )
  const updateAmount = (amount) => {
    setAmountPayable(amount);
    calcModel.amountPayable = amountPayable;
   
    setAmountRecievable(calcModel.amountRecievable);
    setRepayment(calcModel.repaymentFee);
  };
  const updateLoanType = (type) => {
    setLoanType(type);

    if (loanType === "salary") {
      setShowMonths(true);
      return true;
    }
    setShowMonths(false);
  };
  const updateMonths=(numMonths)=>{
    setMonths(numMonths)
    calcModel.months=months;
    calcModel.update()
    console.log( calcModel.nextPaymentDate)
    setAmountRecievable(calcModel.amountRecievable);
    setRepayment(calcModel.repaymentFee);
  }
  return (
    <AmountContext.Provider value={updateAmount}>
      <div className={"card"} style={{ width: "35rem" }}>
        <Header />
        <div className={"card-body"}>
          <Sliders showMonths={showMonths} changeMonths={updateMonths} />
          <LoanType loanType={loanType} updateLoanType={updateLoanType} />
          <Estimates
            serviceFee={serviceFee}
            amountRecievable={amountRecievable}
            repayment={repayment}
            date={dueDate}
          />
          <SubmitButton amount={amountPayable} updateLoan={updateLoan} months={months} receivable={amountRecievable} />
        </div>
      </div>
      <LoanModal />
    </AmountContext.Provider>
  );
};

const mapStateToProps=(state)=>{
  return{
      amount:state.loan.amount,
      months:state.loan.months,
      amountPayable:state.loan.amountPayable,
      monthlyPayment:state.loan.monthlyPayment
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
      updateLoan:(amount,months,receivable)=>{  
        dispatch({type:"UPDATE_LOAN",amount:amount,months:months,receivable:receivable})
    }
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Calculator);

