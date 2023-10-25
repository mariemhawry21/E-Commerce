import React from "react";
import { useEffect, useState, createContext } from "react";

export const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemCount] = useState(0);
  //update amount
  useEffect(() => {
    let totalItems = 0;
    for (let i in cart) {
      if (!isNaN(parseInt(i))) {
        totalItems += parseInt(cart[i].amount);
      }
    }
    setItemCount(totalItems);
  }, [cart]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check if the item n the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };
  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const updateAmount = (id, value) => {
    let newCart = [...cart];
    let flag = true;
    for (let i in newCart) {
      if (newCart[i].id == id) {
        newCart[i].amount += Number(value);
        if (newCart[i].amount < 1 && value == -1) {
          removeCart(id);
          flag = false;
        }
      }
    }
    if (flag) setCart(newCart);
  };
  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach((element) => {
      totalPrice += element.price * element.amount;
    });
    return totalPrice;
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        clearCart,
        updateAmount,
        calculateTotal,
        itemAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
