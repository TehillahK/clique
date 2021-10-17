import { useState,useRef, createContext, useContext } from "react";
import { Link } from "react-router-dom";
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


function TypeOfCustomer() {
  return (
    <div className={"d-grid gap-2   "}>
      <button className="btn btn-link d-flex justify-content-center">
        New Customer
      </button>
      <button className="btn btn-link d-flex justify-content-center">
        Returning Customer
      </button>
    </div>
  );
}
function Header() {
  return (
    <div className={"card-header"}>
      <h2>How Much Do You Need?</h2>
      <TypeOfCustomer />
    </div>
  );
}
function Sliders(props) {
  const showMonths = props.showMonths;
  const changeAmount = useContext(AmountContext);
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
        {showMonths && (
          <div>
            <p>For how many months?</p>
            <Slider valueLabelDisplay="auto" min={1} max={12} />
          </div>
        )}
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
  return (
    <div className={"flex flex-column estimates"}>
      <div className={"flex flex-row space-between estimate"}>
        <p>Service fee</p>
        <p>K{serviceFee}</p>
      </div>
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
        <p>31/10/20</p>
      </div>
    </div>
  );
}
function SubmitButton() {
  return (
    <div className={"d-grid gap-2"}>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Check eligibility
      </button>
    </div>
  );
}

const Calculator = () => {
  const calcModel = new CalculatorModel();
  const closeBtn= useRef();
  const [showMonths, setShowMonths] = useState(false);
  const [loanType, setLoanType] = useState("salary");
  const [amountPayable, setAmountPayable] = useState(500);
  const [serviceFee, setServiceFee] = useState(calcModel.serviceFee);
  const [amountRecievable, setAmountRecievable] = useState(
    calcModel.amountRecievable
  );
  const [repayment, setRepayment] = useState(calcModel.repaymentFee);
  const updateAmount = (amount) => {
    setAmountPayable(amount);
    calcModel.amountPayable = amountPayable;
    setServiceFee(calcModel.serviceFee);
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
  return (
    <AmountContext.Provider value={updateAmount}>
      <div className={"card"} style={{ width: "35rem" }}>
        <Header />
        <div className={"card-body"}>
          <Sliders showMonths={showMonths} />
          <LoanType loanType={loanType} updateLoanType={updateLoanType} />
          <Estimates
            serviceFee={serviceFee}
            amountRecievable={amountRecievable}
            repayment={repayment}
          />
          <SubmitButton />
        </div>
      </div>
      <LoanModal />
    </AmountContext.Provider>
  );
};

export default Calculator;

