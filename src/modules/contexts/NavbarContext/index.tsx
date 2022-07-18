import React from 'react';

interface IRoute {
  name?: string;
  protected?: boolean;
  guestOnly?: boolean;
  path?: string;
  component?: () => JSX.Element;
  currentTab?: number;
}
export interface INavbar {
  currentTab?: number;
  route?: IRoute;
  clientHeaderRef?: React.MutableRefObject<any>;
  setCurrentTab?: React.Dispatch<React.SetStateAction<number>>;
  setRoute?: React.Dispatch<React.SetStateAction<any>>;
}

export const defaultValue: Readonly<INavbar> = {
  currentTab: 0,
};

export const defaultRoute: Readonly<INavbar> = {
  currentTab: 0,
};

export const NavbarContext =
  React.createContext<INavbar>(defaultValue);
export const useNavbar = () => {
  return React.useContext(NavbarContext);
};

const NavbarProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [route, setRoute] = React.useState(defaultRoute);
  const clientHeaderRef = React.useRef(null);

  const value = React.useMemo(() => {
    return {
      currentTab,
      route,
      clientHeaderRef,
      setRoute,
      setCurrentTab,
    };
  }, [currentTab, clientHeaderRef, route]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
