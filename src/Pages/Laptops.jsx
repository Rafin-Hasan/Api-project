import React, { useEffect, useState } from "react";
import Navber from "../Components/Navber";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProductData } from "../Slice/CounterSlice";

const Laptops = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://api.jsonbin.io/v3/b/667425e1e41b4d34e406309a").then((res) =>
      setProductData(res.data.record)
    );
  }, []);
  const handleadd = (add) => {
    navigate("/details");
    dispatch(singleProductData(add));
  };

  return (
    <>
      <Navber />
      <div className="container p-5">
        <div className="main-row flex flex-wrap gap-5 justify-center">
          {productData.map((item, i) => (
            <div
              key={i}
              className="single-card w-[250px] h-[600px] bg-orange-300 rounded-tl-3xl rounded-br-3xl p-5 hover:bg-white hover:text-black border-solid hover:border-2 border-black hover:scale-90"
            >
              <div className="photo w-full h-[150px] overflow-hidden">
                <img className="w-full h-full" src={item.image} alt="photo" />
              </div>
              <div className=" mt-5">
                <h2 className="h-[40px] text-[20px] font-semibold pt-2 pb-2">
                  {item.model}
                </h2>
                <ul className="list-disc p-5 h-[200px]">
                  <li>Name : {item.name}</li>
                  <li>Brand : {item.brand}</li>
                  <li>Display : {item.display_size}</li>
                  <li>operation system : {item.operation_system}</li>
                </ul>
                <div className="btn items-center">
                  <button
                    onClick={() => handleadd(item)}
                    className="w-full h-[40px] font-Polksa font-semibold text-white bg-orange-600 p-3 flex justify-center items-center gap-2 rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2"
                  >
                    Details
                  </button>
                  <button className="w-full h-[40px] font-Polksa font-semibold text-white bg-orange-600 p-3 mt-2 flex justify-center items-center gap-2 rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2">
                    Add to cart
                  </button>
                </div>
                <h1 className="text-[22px] font-bold text-red-600 text-center mb-4">
                  Price :{item.price}{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Laptops;
