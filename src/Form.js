import { useState } from "react";

const Form = (props) => {
  const [formValues, setFormValues] = useState({
    homeValue: "",
    downPayment: "",
    interestRate: "",
    loanDuration: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getValues(formValues);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues({
      homeValue: "",
      downPayment: "",
      interestRate: "",
      loanDuration: "",
    });
  };
  return (
    <form className="flex flex-col text-roboto" onSubmit={handleSubmit}>
      <div className="form-control text-roboto mt-[1.25rem] ">
        <label className="input-group w-[100%]">
          <span className="w-[35%]">Home Value</span>
          <input
            type="text"
            placeholder=""
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
            placeholder=""
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
            name="downPayment"
            value={formValues.downPayment}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w[35%]">Interest Rate</span>
          <input
            type="text"
            placeholder=""
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
      <div className="form-control mt-6">
        <button onClick={handleReset} className="btn btn-error">
          Clear Form
        </button>
      </div>
    </form>
  );
};

export default Form;
