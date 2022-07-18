import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from 'modules/_partials/Logo';
import brandMinLogo from 'assets/images/brandMinLogo.svg';
import { clientTopNavs } from 'helpers/navs';
import PopupLogin from 'modules/_partials/PopupLogin';
import { useNavbar } from 'modules/contexts/NavbarContext';
import PopupUserLinks from '../PopupUserLinks';
import PopupContentLinks from '../PopupContentLinks';
import LeftDrawer from '../LeftDrawer';

const ClientHeader = ({ profile }) => {
  const { clientHeaderRef } = useNavbar();
  const [showLogin, setShowLogin] = React.useState(false);
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState(1);
  const onChooseContent = (path: string) => {
    if (!profile) {
      setShowLogin(true);
    } else {
      navigate(path);
    }
  };
  const handleGetStarted = () => {
    switch (current) {
      case 1:
        return navigate('/student/login');
      case 2:
        return navigate('/parent/login');
      case 3:
        return navigate('/tutor/login');
      default:
        return navigate('/student/login');
    }
  };
  return (
    <div
      ref={clientHeaderRef}
      className="bg-white z-20 shadow-sm flex flex-col w-full top-0 sticky"
    >
      <div className="relative flex flex-col itemscenter w-full">
        <div className="px-4 md:px-8 py-1.5 flex items-center justify-between gap-x-12 w-full">
          <Logo isBrand />

          <div className="flex items-center space-x-6">
            <PopupUserLinks
              current={current}
              onChangeUser={index => setCurrent(index)}
            />
            <button
              type="button"
              onClick={handleGetStarted}
              className="rounded-2xl bg-brand-yellow whitespace-nowrap px-4 md:px-8 py-3 font-semibold text-base"
            >
              Get started
            </button>
          </div>
          <div className="flex md:hidden">
            <LeftDrawer items={clientTopNavs} />
          </div>
        </div>
        <div className="hidden md:flex whitespace-nowrap overflow-x-auto w-full md:w-auto md:items-center ml-auto text-white px-4 md:px-8 bg-brand-blue gap-x-10">
          {clientTopNavs.map(element => {
            if (element.more) {
              return (
                <PopupContentLinks
                  onChooseContent={path => onChooseContent(path)}
                />
              );
            }
            return (
              <Link
                key={element.label}
                to={element.path}
                className="py-3 font-medium"
              >
                <span>{element.label}</span>
                {element.more ? <ArrowDropDownIcon /> : null}
              </Link>
            );
          })}
        </div>
        {showLogin ? (
          <PopupLogin onClose={() => setShowLogin(false)} />
        ) : null}
      </div>
    </div>
  );
};

ClientHeader.defaultProps = {
  scrollTo() {},
};

const mapStateToProps = state => ({
  profile: state.me.data,
});

export default connect(mapStateToProps)(ClientHeader);
