import React from 'react';
import AdminScaffold from 'modules/widgets/AdminScaffold';

const CurriculaActivity = () => {
  return (
    <AdminScaffold>
      <div className="flex flex-col gap-y-4 w-full items-center p-4">
        <button
          type="button"
          className="px-4 py-3 bg-brand-blue rounded text-white font-medium ml-auto"
        >
          Add curriculum
        </button>
      </div>
    </AdminScaffold>
  );
};

export default CurriculaActivity;
