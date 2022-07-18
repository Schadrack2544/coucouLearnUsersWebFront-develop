import React from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.png';
import AdminScaffold from 'modules/widgets/AdminScaffold';
import CurriculaCard from './CurriculaCard';

const data = [
  { avatar, title: 'Rwanda Competence based curriculum' },
  { avatar, title: 'Kenya Competence based curriculum' },
  { avatar, title: 'Cambridge curriculum' },
];

const CurriculaActivity = () => {
  return (
    <AdminScaffold>
      <div className="flex flex-col gap-y-4 w-full items-center p-4">
        <Link
          to="/add-curriculum"
          className="px-4 py-3 bg-brand-blue rounded text-white font-medium ml-auto"
        >
          Add curriculum
        </Link>
        {data.map(element => (
          <CurriculaCard
            key={element.title}
            title={element.title}
            avatar={element.avatar}
          />
        ))}
      </div>
    </AdminScaffold>
  );
};

export default CurriculaActivity;
