import React, { ReactNode, createContext, useState } from 'react';

type GeneralContext = {
  isExpand: any;
  isCreatePost: any;
  toggleCreatePost: () => void;
  setIsCreatePost: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  contentSidebarItem: string;
  setContentSidebarItem: React.Dispatch<React.SetStateAction<string>>;
};

export const GeneralContext = createContext<GeneralContext>(
  {} as GeneralContext
);

type Props = {
  children: ReactNode;
};

export function GeneralProvider({ children }: Props) {
  const [isExpand, setisExpand] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [menuState, setMenuState] = useState<boolean>(true); // state menu on full size screen

  const [contentSidebarItem, setContentSidebarItem] = useState('home'); // Expand content from sidebar item

  const toggleSidebar = () => {
    setisExpand(!isExpand);
  };

  const toggleCreatePost = () => {
    setIsCreatePost(!isExpand);
  };

  const closeSidebar = () => {
    setisExpand(true);
  };

  const closeCreatePost = () => {
    setisExpand(false);
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
        openSidebar,
        toggleCreatePost,
        isCreatePost,
        setIsCreatePost,
        contentSidebarItem,
        setContentSidebarItem,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
