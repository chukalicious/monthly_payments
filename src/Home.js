import { FcMoneyTransfer } from "react-icons/fc";
import Form from "./Form";
import Results from "./Results";

const Home = () => {
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
              <Form />
            </div>
          </div>
          <Results />
        </div>
      </div>
    </div>
  );
};

export default Home;
