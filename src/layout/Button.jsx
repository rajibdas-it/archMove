/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <button className="bg-brightRed px-4 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
      {props.title}
    </button>
  );
};

export default Button;
