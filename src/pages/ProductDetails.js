import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContext";
import { productContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(productContext);
  const { addToCart } = useContext(cartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    <section className="h-screen flex justify-center items-center">
      ...Loading
    </section>;
  }
  const { image, description, title, price } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt="" className="max-w-[200px] lg:max-w-md" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ${price}
            </div>
            <div className="mb-8">
              <p>{description}</p>
            </div>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white p-4 px8 rounded-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
