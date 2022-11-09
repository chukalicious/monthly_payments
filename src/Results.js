const Results = () => {
  const amount = Number(89400);
  return (
    <div className="stats shadow bg-primary text-neutral-content mx-auto my-6 p-3 w-[85%]">
      <div className="stat justify-items-center">
        <div className="stat-title text-3xl font-extralight font-roboto">
          Monthly Payment:{" "}
        </div>
        <div className="stat-value font-roboto">
          {" "}
          ${amount.toLocaleString()}
        </div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>
    </div>
  );
};

export default Results;
