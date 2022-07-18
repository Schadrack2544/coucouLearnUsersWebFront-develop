import React from 'react';
import Logo from '../LogoBig';

const Footer = () => {
  return (
    <div className="bg-[#D97706] flex flex-col items-center p-4 md:p-8 rounded-t-2xl w-full">
      <div className="inline-grid gap-x-10 gap-y-5 grid-cols-2 md:grid-cols-5 w-full md:max-w-6xl">
        <div className="flex flex-col col-span-2">
          <Logo isBrand />
        </div>
        <div className="flex flex-col items-center text-gray-200">
          <h4 className="text-white mb-2">Company</h4>
          <p className="mt-1 font-medium text-xs">Overview</p>
          <p className="mt-1 font-medium text-xs">Team</p>
          <p className="mt-1 font-medium text-xs">Press</p>
        </div>
        <div className="flex flex-col items-center text-gray-200">
          <h4 className="text-white mb-2">Product</h4>
          <p className="mt-1 font-medium text-xs">Animations Zone</p>
          <p className="mt-1 font-medium text-xs">Books Zone</p>
          <p className="mt-1 font-medium text-xs">Audios Zone</p>
          <p className="mt-1 font-medium text-xs">Features</p>
          <p className="mt-1 font-medium text-xs">Pricing</p>
        </div>
        <div className="flex flex-col items-center text-gray-200">
          <h4 className="text-white mb-2">Downloads</h4>
          <p className="mt-1 font-medium text-xs">Android app</p>
          <p className="mt-1 font-medium text-xs">iOS app</p>
          <p className="mt-1 font-medium text-xs">Inganji math windows app</p>
          <p className="mt-1 font-medium text-xs">Inganji math android</p>
          <p className="mt-1 font-medium text-xs">Inganji math ios</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
