import { useState } from "react";

const Form = (props) => {
  console.log("Form: props: ", props);
  const [formValues, setFormValues] = useState({
    homeValue: "",
    downPayment: "",
    loanAmount: "",
    interestRate: "",
    loanDuration: "",
  });
  console.log("formValues: ", formValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("event: ", e);
    props.getValues(formValues);
  };
  return (
    <form className="flex flex-col text-roboto" onSubmit={handleSubmit}>
      <div className="form-control text-roboto mt-[1.25rem] ">
        <label className="input-group w-[100%]">
          <span className="w-[35%]">Home Value</span>
          <input
            type="text"
            placeholder="Example: $10,000.00"
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
            name="homeValue"
            value={formValues.homeValue}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[35%]">Down Payment</span>
          <input
            type="text"
            placeholder="Example: $10,000.00"
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
            name="downPayment"
            value={formValues.downPayment}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[35%]">Loan Amount</span>
          <input
            type="text"
            placeholder="Example: $10,000.00"
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
            name="loanAmount"
            value={formValues.loanAmount}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w[35%]">Interest Rate</span>
          <input
            type="text"
            placeholder="Example: $10,000.00"
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
            name="interestRate"
            value={formValues.interestRate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[45%] text-ellipsis">Loan Duration (yrs)</span>
          <input
            type="text"
            placeholder="Enter your loan duration in years"
            className="input input-bordered w-[55%] focus:border-primary focus:border-4 text-ellipsis"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Calculate</button>
      </div>
    </form>
  );
};

export default Form;
