import React from 'react';

export interface IWindow {
  isSmallDevice?: boolean;
  isMediumDevice?: boolean;
  isLargeDevice?: boolean;
  isMounted?: React.MutableRefObject<boolean>;
  setIsSmallDevice?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMediumDevice?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValue: Readonly<IWindow> = {
  isSmallDevice: false,
  isMediumDevice: false,
  isLargeDevice: false,
};

export const WindowContext = React.createContext(defaultValue);
export const useWindow = () => {
  return React.useContext(WindowContext);
};
const WindowProvider = ({ children }) => {
  const [isSmallDevice, setIsSmallDevice] = React.useState(false);
  const [isMediumDevice, setIsMediumDevice] = React.useState(false);
  const [isLargeDevice, setIsLargeDevice] = React.useState(false);
  const isMounted = React.useRef(true);

  const updateWindow = () => {
    if (isMounted.current) {
      if (window.innerWidth < 768) {
        setIsSmallDevice(true);
        setIsMediumDevice(false);
        setIsLargeDevice(false);
      } else if (
        window.innerWidth >= 768 &&
        window.innerWidth < 991
      ) {
        setIsMediumDevice(true);
        setIsSmallDevice(false);
        setIsLargeDevice(false);
      } else {
        setIsSmallDevice(false);
        setIsMediumDevice(false);
        setIsLargeDevice(true);
      }
    }
  };

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    updateWindow();
    window.addEventListener('resize', updateWindow);

    return () => {
      window.addEventListener('resize', updateWindow);
    };
  }, []);

  const value = React.useMemo(() => {
    return {
      isSmallDevice,
      isMediumDevice,
      isLargeDevice,
      setIsLargeDevice,
      setIsMediumDevice,
      setIsSmallDevice,
    };
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);
  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
