import React from "react";
import Navber from "../Components/Navber";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.Counter.value);

  const change = () => {
    navigate("/order");
  };
  const go = () => {
    navigate("/laptop");
  };

  return (
    <>
      <Navber />
      <div className="w-full bg-orange-600 mt-10 flex justify-between">
        <img src={data.image} alt="product pic" />
        <div className="pt-[3rem] font-poppins font-semibold text-center">
          <p>{data.name}</p>
          <p>{data.brand}</p>
          <p>{data.operation_system}</p>
        </div>
        <div className="btn items-center p-2 ">
          <button
            onClick={change}
            className="w-full h-[40px] font-Polksa font-semibold text-white bg-green-600 p-3 mt-2 flex justify-center items-center gap-2 rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2"
          >
            Buy now
          </button>
          <button
            onClick={go}
            className="w-full h-[40px] font-Polksa font-semibold text-white bg-blue-600 p-3 mt-2 flex justify-center items-center gap-2 rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
