import React, { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [seller, setSeller] = useState(false);
    return (
        <Context.Provider value={{'state1':[ seller, setSeller], 'state2':[menuOpened, setMenuOpened]}}>
            {children}
        </Context.Provider>
    );
};



