const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("event: ", e);
  };
  return (
    <form className="flex flex-col text-roboto" onSubmit={handleSubmit}>
      <div className="form-control text-roboto mt-[1.25rem] ">
        <label className="input-group w-[100%]">
          <span className="w-[35%]">Home Value</span>
          <select className="select select-bordered focus:border-primary focus:border-4 w-[65%]">
            <option disabled selected>
              Select
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[35%]">Down Payment</span>
          <input
            type="text"
            placeholder="Enter your Funds"
            className="input input-bordered w-[65%] focus:border-primary focus:border-4"
          />
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[35%]">Loan Amount</span>
          <select className="select select-bordered w-[65%] focus:border-primary focus:border-4">
            <option disabled selected>
              Select
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w[35%]">Interest Rate</span>
          <select className="select select-bordered w-[65%] focus:border-primary focus:border-4">
            <option disabled selected>
              Select
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </label>
      </div>
      <div className="form-control mt-[1.25rem]">
        <label className="input-group">
          <span className="w-[45%]">Loan Duration (yrs)</span>
          <select className="select select-bordered w-[55%] focus:border-primary focus:border-4">
            <option disabled selected>
              Select
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Calculate</button>
      </div>
    </form>
  );
};

export default Form;
