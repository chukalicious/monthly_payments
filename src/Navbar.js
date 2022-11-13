const Navbar = (props) => {
  const handleClick = () => {
    props.handleSetData();
  };
  return (
    <div className="navbar bg-primary border-b-2 border-base-100">
      <button
        onClick={handleClick}
        className="btn btn-ghost normal-case text-xl text-base-100 font-lato font-thin md:text-3xl"
      >
        Monthly Payments
      </button>
    </div>
  );
};

export default Navbar;
