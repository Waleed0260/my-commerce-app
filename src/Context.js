
import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [seller, setSeller] = useState(false);

    return (
        <Context.Provider value={[ menuOpened, setMenuOpened, seller, setSeller ]}>
            {children}
        </Context.Provider>
    );
};