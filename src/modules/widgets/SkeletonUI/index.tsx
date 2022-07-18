import React from 'react';

const SkeletonUI = () => {
  const leftTopNavs = [1, 2, 3, 4];
  return (
    <div className="flex bg-white h-screen w-full overflow-y-auto text-sm">
      <div className="flex flex-col w-1/6 border-r border-[#DBDBDB]">
        <div className="col-span-1 p-4 w-full">
          <div className="w-32 h-12 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="flex flex-col flex-grow col-span-5 bg-white p-2 w-full border-t border-[#DBDBDB]">
          <nav className="flex flex-col flex-grow space-y-3 font-medium">
            {leftTopNavs.map(nav => (
              <div
                key={nav}
                className="animate-pulse bg-gray-200 h-8 w-full"
              />
            ))}
          </nav>

          <div className="flex flex-col space-y-3 mt-4">
            {leftTopNavs.slice(0, 2).map(nav => (
              <div
                key={nav}
                className="animate-pulse bg-gray-200 h-8 w-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-5/6 overflow-y-auto">
        <div className="font-medium flex items-center justify-end col-span-1 bg-white p-4 w-full">
          {leftTopNavs.slice(0, 1).map(nav => (
            <div
              key={nav}
              className="animate-pulse bg-gray-200 rounded-full h-12 w-12"
            />
          ))}
        </div>
        <div className="animate-pulse flex flex-col flex-grow col-span-5 bg-white w-full overflow-y-auto overflow-x-hidden border-t border-[#DBDBDB] p-4">
          <div className="flex-grow bg-gray-200 animate-pulse rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonUI;
