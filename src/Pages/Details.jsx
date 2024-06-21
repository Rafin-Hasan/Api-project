import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.Counter.value);
  const ok = () => {
    navigate("/order");
  };
  return (
    <>
      <section className="pt-20 bg-white">
        <div className="container">
          <div className="main_row flex gap-10 flex-wrap pb-5">
            <div className="product_image w-[500px]">
              <img src={data.image} alt="Laptop image" />
            </div>
            <div className="product_text w-[900px]">
              <h2 className="text-[25px]  font-semibold  italic mb-[50px]">
                {data.description}
              </h2>
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="mt-[50px] text-[18px] font-normal">
                <li>Name: {data.name}</li>
                <li>Brand: {data.brand}</li>
                <li>Display size: {data.display_size}</li>
                <li>Display resolution: {data.display_resolution}</li>
                <li>Operation system: {data.operation_system}</li>
                <li>fingerprint: {data.fingerprint}</li>
                <li>Backlight: {data.backlight}</li>
              </ul>
              <h2 className="text-3xl font-bold italic mt-5 text-orange-600">
                {data.price}$
              </h2>
            </div>
            <button
              onClick={ok}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Buy now
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
