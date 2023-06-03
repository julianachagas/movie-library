import React, { ReactNode } from 'react';

export interface GlobalProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<GlobalProps>(
  {} as GlobalProps,
);

interface Props {
  children?: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('lock-scroll', mobileMenu);
  }, [mobileMenu]);

  return (
    <GlobalContext.Provider value={{ mobileMenu, setMobileMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
