import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { sidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(sidebarContext);
  const { itemAmount } = useContext(cartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="w-[40px]" />
        </Link>

        {/*cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex max-w-[50px]"
        >
          <BsBag className="text-2xl cursor-pointer" />
          <div className="absolute  bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
