import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = ({num}) => {
  return Array(num)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="bg-white h-auto relative py-8 rounded-md shadow hover:shadow-2xl"
      >
        <div className="w-full h-auto flex items-center justify-center relative group">
          <Skeleton width={300} height={300} />
        </div>
        <div className="px-4 z-10 bg-white flex flex-col space-y-5">
          <Skeleton count={3} className="mt-2" />
          <Skeleton height={20} />
        </div>
      </div>
    ));
};

export default ProductSkeleton;
