import { createContext, useState } from "react";

export const NameContext = createContext();

export const MainProvider = ({ children }) => {
  const [name, setName] = useState("Zoll");

  return <NameContext.Provider>
    
    {children};</NameContext.Provider>;
};
