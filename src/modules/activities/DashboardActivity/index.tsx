import React from 'react';
import AdminScaffold from 'modules/widgets/AdminScaffold';
import OverviewCard from './OverviewCard';

const data = [
  { title: 'Curricula', total: 60 },
  { title: 'Grades', total: 16 },
  { title: 'Units', total: 43 },
  { title: 'Tutors', total: 64 },
];

const DashboardActivity = () => {
  return (
    <AdminScaffold>
      <div className="mt-12 p-4 gap-x-5 md:gap-x-10 flex md:justify-center whitespace-nowrap overflow-x-auto w-full">
        {data.map(element => (
          <OverviewCard
            key={element.title}
            title={element.title}
            total={element.total}
          />
        ))}
      </div>
    </AdminScaffold>
  );
};

export default DashboardActivity;
