import { useState, useEffect } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import Form from "./Form";
import Results from "./Results";

const Home = () => {
  const [submittedForm, setSubmittedForm] = useState({
    homeValue: "",
    downPayment: "",
    loanAmount: "",
    interestRate: "",
    loanDuration: "",
  });
  console.log("Home.js: submittedForm: ", submittedForm);

  const [loanValue, setLoanValue] = useState();
  console.log("Home: loanValue(): ", loanValue);
  const [monthlyPayment, setMonthlyPayment] = useState();
  console.log("Home: monthlyPayment: ", monthlyPayment);
  const [yearsToMonths, setYearsToMonths] = useState();
  console.log("Home: yearsToMonths: ", yearsToMonths);

  const getValues = (form) => {
    console.log("The form was submitted! ");
    console.log(JSON.stringify(form));
    setSubmittedForm({
      ...submittedForm,
      homeValue: form.homeValue,
      downPayment: form.downPayment,
      loanAmount: form.loanAmount,
      interestRate: form.interestRate,
      loanDuration: form.loanDuration,
    });
  };

  const calculateValue = () => {
    setLoanValue(
      Number(submittedForm.homeValue) - Number(submittedForm.downPayment)
    );
    return loanValue;
  };

  const calculateMonthlyPayment = () => {
    // Percentage conversion
    const percentageToDecimal = (percent) => {
      return percent / 12 / 100;
    };

    // years to month conversion
    const yearsToMonths = () => {
      setYearsToMonths(Number(submittedForm.loanDuration) * 12);
      return yearsToMonths;
    };

    setMonthlyPayment(
      percentageToDecimal(Number(submittedForm.interestRate)) * loanValue
    );

    return monthlyPayment;
  };

  useEffect(() => {
    calculateValue();
    calculateMonthlyPayment();
  }, [submittedForm]);

  return (
    <div className="hero min-h-[90vh] bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left flex flex-col ">
          <div className="avatar mx-auto my-6">
            <div className="w-full rounded pt-8 mb-4 lg:pt-0 lg:mb-0">
              <FcMoneyTransfer className="text-[14rem] lg:text-[25rem] animate-waving-hand p-4" />
              ;
            </div>
          </div>
          <h1 className="text-3xl font-bold lg:text-center pt-4 font-lato">
            Calculate Your Monthly Payments
          </h1>
          <p className="py-6 w-[75%] font-roboto text-lg mx-auto lg:w-full lg:text-center lg:py-[-1rem]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <Form getValues={getValues} />
            </div>
          </div>
          <Results />
        </div>
      </div>
    </div>
  );
};

export default Home;
