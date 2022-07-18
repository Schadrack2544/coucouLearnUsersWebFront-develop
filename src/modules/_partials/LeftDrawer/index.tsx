import React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link, useLocation } from 'react-router-dom';

interface IInterface {
  items: any[];
}
const LeftDrawer = ({ items }: IInterface) => {
  const [toggle, setToggle] = React.useState(false);
  const location = useLocation();
  const toggleDrawer = (open: boolean) => event => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="md:hidden py-2"
      >
        <MenuIcon fontSize="large" />
      </button>
      <Drawer
        anchor="left"
        open={toggle}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="py-2 flex flex-col">
            {items.map(nav => {
              const active = location.pathname === nav.path;
              return (
                <Link
                  key={nav.label}
                  to={nav.path}
                  className={`py-3 px-4 flex items-center font-medium hover:bg-gray-200 ${
                    active ? 'text-brand-blue' : 'text-gray-800'
                  }`}
                >
                  {/* {nav.icon ? (
                  <nav.icon
                    color={
                      location.pathname === nav.path
                        ? '#1434A4'
                        : 'black'
                    }
                  />
                ) : null} */}
                  <span>{nav.label}</span>
                </Link>
              );
            })}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
