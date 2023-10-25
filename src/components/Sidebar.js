import React from "react";
import { useContext } from "react";
import { sidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(sidebarContext);
  const { cart, clearCart, calculateTotal, itemAmount } =
    useContext(cartContext);
  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
  w-full bg-white fixed top-0 shadow-xl h-full
  md:w-[35vw] xl:max-w-[30vw] transition-all duration-300
  z-20 px-5 lg:px-[35px] 
  `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={() => handleClose()}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 overflow-x-hidden overflow-y-auto h-[520px] lg:h-[350px] border-b
      "
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col py-4 gap-y-3 mt-4">
        <div className=" flex justify-between items-center w-full">
          <div className="uppercase font-semibold">
            <span className="mr-2">
              Total : {parseFloat(calculateTotal()).toFixed(2)}
            </span>
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer w-12 h-12 bg-red-500 text-white flex justify-center items-center"
          >
            <FiTrash2 />
          </div>
        </div>

        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-semibold"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-semibold"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
