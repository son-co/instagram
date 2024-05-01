import React, { ReactNode, createContext, useState } from 'react';

type GeneralContext = {
  isExpand: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GeneralContext = createContext<GeneralContext>(
  {} as GeneralContext
);

type Props = {
  children: ReactNode;
};

export function GeneralProvider({ children }: Props) {
  const [isExpand, setisExpand] = useState(false);
  const [menuState, setMenuState] = useState<boolean>(true); // state menu on full size screen
  const toggleSidebar = () => {
    setisExpand(!isExpand);
  };

  const closeSidebar = () => {
    setisExpand(true);
  };

  const openSidebar = () => {
    setisExpand(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        isExpand,
        toggleSidebar,
        closeSidebar,
        menuState,
        setMenuState,
        openSidebar
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
