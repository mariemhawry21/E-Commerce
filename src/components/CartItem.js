import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { cartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { removeCart, updateAmount } = useContext(cartContext);
  const { id, title, image, amount, price } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="flex items-center w-full min-h-[150px] gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="img" />
        </Link>
        <div className="w-full  flex flex-col">
          {/*title and remove icon */}
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`}>
              <p className="uppercase text-primary hover:underline font-medium max-w-[240px]">
                {title}
              </p>
            </Link>
            <div>
              <IoMdClose
                className="text-gray-500 transition hover:text-red-500 cursor-pointer text-xl mx-2"
                onClick={() => {
                  removeCart(id);
                }}
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px]">
            <div className="flex flex-1  max-w-[100px] items-center h-full border text-primary font-medium">
              {/*minus icon */}
              <div
                className="flex flex-1 justify-center items-center cursor-pointer h-full"
                onClick={() => updateAmount(id, -1)}
              >
                <IoMdRemove />
              </div>
              {/*amount */}
              <div className="flex flex-1 justify-center items-center  h-full px-2">
                {amount}
              </div>
              {/*add icon */}
              <div
                className="flex flex-1 justify-center items-center cursor-pointer h-full"
                onClick={() => updateAmount(id, 1)}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center">
              ${price}
            </div>
            <div className="flex flex-1 justify-end items-center">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
