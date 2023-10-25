import React, { useState, createContext } from "react";

export const sidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <sidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </sidebarContext.Provider>
  );
};

export default SidebarProvider;
