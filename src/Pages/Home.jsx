import React from "react";
import Navber from "../Components/Navber";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("/laptop");
  };
  console.log(change);
  return (
    <>
      <Navber />
      <img
        className="container flex justify-center pt-4"
        src="/img/slider.png"
        alt="Slider"
      />
      <div className="btn container flex justify-end">
        <button
          onClick={change}
          className="bg-orange-600 text-white p-3 font-poppins font-bold rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2"
        >
          See More
        </button>
      </div>
    </>
  );
};

export default Home;
