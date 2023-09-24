import React from 'react';
const FooterTop = () => {
    return (
    
        <div className="px-4 py-10 bg-white my-10 flex justify-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="font-semibold capitalize">
              See personalized recommendations
            </p>
            <button className="w-full font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200">
              sign up
            </button>
            <p className="capitalize text-sm">
              New customber?
              <span className="text-blue-400 cursor-pointer">strat here.</span>
            </p>
          </div>
            </div>
      
    );
}

export default FooterTop;