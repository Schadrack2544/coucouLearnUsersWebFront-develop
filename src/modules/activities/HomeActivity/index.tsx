import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useParams } from 'react-router-dom';
import ClientHeader from 'modules/_partials/ClientHeader';
import students from 'assets/images/students.svg';
import pricingPlans from 'helpers/db/pricingPlan';
import Footer from 'modules/_partials/Footer';
import VideoIcon from 'modules/_partials/_drawable/icons/videoIcon';
import { clientTopNavs } from 'helpers/navs';
import WhyCoucouLearn from '../_Partials/Home/WhyCoucou';
import EngageLearning from '../_Partials/Home/EngageLearning';
import Testimonials from '../_Partials/Home/Testimonials';
import PricingCard from '../_Partials/Home/PricingCard';
import Partners from '../_Partials/Home/Partners';
import TrustedBy from '../_Partials/Home/TrustedBy';
import ContactUs from '../_Partials/ContactUs';
import MeetTutors from '../_Partials/Home/MeetTutors';

const HomeActivity = () => {
  const { tab } = useParams();
  const whyRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const pricingRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const tutorsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const handleScrollTo = (tabNumber: number) => {
    switch (tabNumber) {
      case 1:
        whyRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 4:
        testimonialsRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 5:
        tutorsRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 6:
        contactRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    clientTopNavs.forEach(element => {
      const arr = element.path.split('/');
      if (arr[arr.length - 1] === tab) {
        handleScrollTo(element.tab);
      }
    });
  }, [tab]);
  return (
    <div className="bg-white flex flex-grow flex-col items-center w-full">
      <ClientHeader />
      <div className="w-full md:flex relative">
        <div className="w-full md:w-1/2 bg-brand-blue justify-center flex items-start flex-col text-white py-12 md:py-24 px-4 md:px-8">
          <div className="flex flex-col text-2xl md:text-3xl font-semibold">
            <p>Welcome to the home</p>
            <ReactTypingEffect
              className="text-center text-base md:text-3xl"
              speed={100}
              typingDelay={80}
              eraseSpeed={0}
              eraseDelay={2400}
              text={[
                'of engaging learning',
                'of personalized learning',
                'of gamified learning',
                'of augmented learning',
              ]}
            />
            <p>
              <span className="text-brand-yellow">
                in Sub Saharan Africa
              </span>
            </p>
          </div>
          <p className="mt-6">
            Powered by augmented reality (AR) interact with edutaining
            learning contents from animations to comics to digital
            books and audio books and get inspired by our super heros
            &ldquo;Keza and Manzi&rdquo;. Get personalized learning in
            courses you want with amazing tutors.
          </p>
          <a
            href="https://calendly.com/augmentedfuture"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="rounded-lg px-12 py-3 space-x-3 flex items-center mt-12 text-gray-800 font-semibold text-lg bg-brand-yellow"
            >
              <VideoIcon />
              <span>Book demo</span>
            </button>{' '}
          </a>
        </div>
        <div className="w-full bg-transparent bottom-0 absolute flex flex-col items-center">
          <div className="h-8 w-8 bg-brand-yellow rounded-full" />
        </div>

        <div
          className="w-full md:w-1/2 bg-center bg-cover bg-no-repeat min-h-[549px]"
          style={{ backgroundImage: `url(${students})` }}
        />
      </div>

      <div
        ref={whyRef}
        className="flex flex-col items-center px-4 md:px-8 mt-12"
      >
        <WhyCoucouLearn />
      </div>

      <EngageLearning featuresRef={featuresRef} />

      <div ref={pricingRef} className="px-4 md:px-8 mt-12">
        <div className="flex flex-col md:max-w-6xl">
          <div className="flex items-center gap-3 justify-between">
            <h1 className="text-2xl md:px-12 md:text-4xl font-light">
              Pricing
            </h1>
            <div className="flex items-center">
              <p className="font-medium text-brand-blue">
                Currency: Frw
              </p>
            </div>
          </div>
          <div className="mt-8 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-3">
            {pricingPlans.map(plan => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={testimonialsRef}
        className="w-full flex flex-col items-center"
      >
        <Testimonials />
      </div>
      <div className="w-full mt-32">
        <Partners />
      </div>
      <div ref={tutorsRef} className="w-full mt-12">
        <MeetTutors />
      </div>

      <div className="flex flex-col items-center px-4 md:px-8 mt-12 w-full">
        <TrustedBy />
      </div>
      <div
        ref={contactRef}
        className="flex flex-col items-center px-4 md:px-8 py-12 w-full"
      >
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default HomeActivity;
