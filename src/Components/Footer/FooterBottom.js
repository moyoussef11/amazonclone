import React from "react";

const FooterBottom = () => {

  return (
    <div className="bg-black w-full text-white py-5">
      <div className="px-4 max-w-5xl mx-auto">
        <div className="text-center">
          <ul className="flex items-center justify-center gap-4 capitalize font-semibold cursor-pointer">
            <li className="hover:underline">Conditions of Use</li>
            <li className="hover:underline">Privacy Notice</li>
            <li className="hover:underline">Your Ads Privacy Choices</li>
          </ul>
          <p className="text-sm font-bold capitalize">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
