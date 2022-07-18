import React from 'react';
import MachineIcon from 'modules/_partials/_drawable/icons/machineIcon';

interface IWhyCard {
  Icon?: any;
  title?: string;
  description?: string;
  className?: string;
}

const WhyCard = ({
  Icon,
  title,
  description,
  className,
}: IWhyCard) => {
  return (
    <div
      className={`rounded-[30px] flex flex-col items-center text-white px-8 py-12 relative ${className}`}
    >
      <div className="rounded-b-full bg-white py-2 px-6 top-0 absolute">
        {Icon ? <Icon /> : null}
      </div>
      <h2 className="text-xl md:text-2xl font-bold tracking-wide">
        {title}
      </h2>
      <p className="mt-4">{description}</p>
    </div>
  );
};

WhyCard.defaultProps = {
  Icon: MachineIcon,
  className: 'bg-[#F97316]',
  title: 'Play and Learn',
  description:
    'Learn through play using curriculum-based educating games for every unit in all subjects. Fellow students are enjoying this and scoring more!',
};

export default WhyCard;
