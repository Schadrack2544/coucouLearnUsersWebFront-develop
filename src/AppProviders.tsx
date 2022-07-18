import React from 'react';
import NavbarProvider from 'modules/contexts/NavbarContext';
import WindowProvider from 'modules/contexts/WindowContext';
import AnimationProvider from 'modules/contexts/AnimationContext';

const AppProviders = ({ children }) => {
  return (
    <WindowProvider>
      <NavbarProvider>
        <AnimationProvider>{children}</AnimationProvider>
      </NavbarProvider>
    </WindowProvider>
  );
};

export default AppProviders;
