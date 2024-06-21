import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const data = useSelector((state) => state.Counter.value);

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
