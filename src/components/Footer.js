import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container text-white  mx-auto text-center">
        <p>
          &copy; 2018 - {new Date().getFullYear()} &middot; Built with mariem
          this E-Commerce website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
