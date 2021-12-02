import { createContext, useState } from "react";

export const loginContext = createContext();

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <loginContext.Provider value={[account, setAccount]}>
      {children}
    </loginContext.Provider>
  );
};

export default ContextProvider;
