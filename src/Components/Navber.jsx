import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <div className=" bg-orange-600 p-5 ">
        <div className="main_manu container flex justify-between">
          <div className="logo">
            <h1 className="font-bold text-3xl text-white font-Polksa ">
              🌿Green Computer
            </h1>
          </div>
          <div className="manu">
            <ul className="flex gap-4 font-poppins font-semibold text-white ">
              <li className="hover:bg-white hover:text-orange-600 hover:rounded-xl hover:p-1 ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-white hover:text-orange-600 hover:rounded-xl hover:p-1 ">
                <Link to="/laptop">Laptop</Link>
              </li>
              <li className="hover:bg-white hover:text-orange-600 hover:rounded-xl hover:p-1 ">
                <Link to="/Cart">🛒 Cart</Link>
              </li>
              <li className="hover:bg-white hover:text-orange-600 hover:rounded-xl hover:p-1 ">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-white hover:text-orange-600 hover:rounded-xl hover:p-1 ">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
