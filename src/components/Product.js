import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { cartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const { id, image, title, category, price } = product;
  const { addToCart } = useContext(cartContext);
  return (
    <div>
      <div className=" border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] flex mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
          <div
            className="absolute top-6 -right-11 p-2 flex justify-center 
          items-center flex-col opacity-0 group-hover:opacity-100 gap-y-2 transition-all 
          duration-300  group-hover:right-5"
          >
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 flex justify-center items-center text-primary bg-white drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/*category&price &title */}
      <div>
        <p className="font-semibold capitalize text-sm text-gray-500 mb-1">
          {category}
        </p>
        <Link to={`product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
