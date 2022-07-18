import React from 'react';
import ChartIcon from 'modules/_partials/_drawable/icons/chartIcon';
import SupportIcon from 'modules/_partials/_drawable/icons/supportIcon';
import GrowthIcon from 'modules/_partials/_drawable/icons/growthIcon';
import WhyCard from './WhyCard';

const WhyCoucouLearn = () => {
  return (
    <div className="w-full flex flex-col md:max-w-6xl">
      <h1 className="text-xl md:text-2xl md:px-12 font-light">
        Why Augmented Future?
      </h1>
      <div className="mt-4 inline-grid gap-y-3 sm:grid-cols-2 md:grid-cols-4">
        <WhyCard />
        <WhyCard
          title="Learn and Earn"
          Icon={SupportIcon}
          className="bg-[#D97706]"
          description=" Learn through games linked to your curriculum and the more fun thing is that your scores can be incentivised into awards and coupons at our partners such as schools, telecommunications and libraries"
        />
        <WhyCard
          title="Personal Growth"
          Icon={GrowthIcon}
          className="bg-[#9333EA]"
          description=" One of the best decisions you can make in your life is to invest in growth of personal key characters namely mindset, curiosity, purpose and grit. We do that via safeguarding tips shared weekly to make sure that knowledge goes with displine."
        />
        <WhyCard
          title="Get exposed"
          Icon={ChartIcon}
          className="bg-[#10B981]"
          description=" Get featured among best students in Sub Saharan Africa via weekly competitions we conduct in all subjects and stand out to win amazing prizes to boost your schooling journey."
        />
      </div>
    </div>
  );
};

export default WhyCoucouLearn;
