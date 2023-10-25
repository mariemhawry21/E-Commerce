import React from "react";
import { useContext } from "react";
//import product context
import { productContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  //get products from product context
  const { products } = useContext(productContext);

  const filteredProduct = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 max-w-sm mx-auto md:grid-cols-2 md:max-w-none md:mx-0 lg:grid-cols-4  xl:grid-cols-5 gap-[30px]">
            {/* map through the filtered array and display each product */}
            {filteredProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
