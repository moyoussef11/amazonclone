import React from 'react'
import Skeleton from 'react-loading-skeleton';

const DetailsSkeleton = () => {
  return (
    <div className="container w-full h-screen mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Skeleton width={300} height={300} />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col space-y-4">
        <Skeleton count={10} />
      </div>
    </div>
  );
}

export default DetailsSkeleton;