import React from 'react';
import supporter from 'assets/images/kidsmile.jpg';
import emailIcon from 'assets/images/icons/emailIcon.svg';
import locationIcon from 'assets/images/icons/locationIcon.svg';
import whatsappIcon from 'assets/images/icons/whatsappIcon.svg';
import phoneCallIcon from 'assets/images/icons/phoneCallIcon.svg';

const ContactUs = () => {
  return (
    <div className="md:flex justify-start w-full gap-x-10 gap-y-5">
      <div
        className="bg-top h-[450px] w-full md:w-1/2 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${supporter})` }}
      />
      <div className="py-3 flex text-base flex-col items-center">
        <h1 className="text-2xl md:px-12 md:text-4xl font-bold tracking-wide text-transparent bg-gradient-to-r bg-clip-text from-[#AF5858] via-[#E84D8A] to-[#FEB326]">
          Contact us
        </h1>
        <p className="text-center mt-12 text-base">
          We are always there to hear from you.
        </p>
        <p className="text-center mt-1 text-base">
          Please drop us a line or two !
        </p>
        <div className="flex flex-col mt-6">
          <a
            href="mailto:connect@augmented-future.com"
            className="flex items-center space-x-3"
          >
            <img src={emailIcon} alt="" className="h-[32px]" />
            <span>Email: connect@augmented-future.com</span>
          </a>
          <a
            href="tel:+250787883861"
            className="mt-2 flex items-center space-x-3"
          >
            <img src={whatsappIcon} alt="" className="h-[32px]" />
            <span>Whatapp: +250787883861</span>
          </a>
          <a
            href="tel:+250787883861"
            className="mt-2 flex items-center space-x-3"
          >
            <img src={phoneCallIcon} alt="" className="h-[32px]" />
            <span>Phone call: +250787883861</span>
          </a>
          <p className="mt-2 flex items-center space-x-3">
            <img src={locationIcon} alt="" className="h-[32px]" />
            <span>Location: KN 78 ST, Kigali</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
