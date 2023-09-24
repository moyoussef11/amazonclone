import {
  faArrowRightLong,
  faBars,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { sidebar } from "./LiContent";

const HeaderBottom = () => {
  const [showSide, setShowSide] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setShowSide(false);
      }
    });
  }, []);
  return (
    <>
      <div className="bg-slate-800 w-full px-5 md:px-10 text-white h-7">
        <ul className="flex items-center space-x-5">
          <li className="cursor-pointer" onClick={() => setShowSide(true)}>
            All
            <FontAwesomeIcon icon={faBars} />
          </li>
          <li className="hidden md:block cursor-pointer">Today's Deals</li>
          <li className="hidden md:block cursor-pointer">Customer Service</li>
          <li className="hidden md:block cursor-pointer">Gift Cards</li>
          <li className="hidden md:block cursor-pointer">Registry</li>
          <li className="hidden md:block cursor-pointer">Sell</li>
        </ul>
      </div>

      {showSide ? (
        <div
          ref={ref}
          className="w-full absolute top-0 bg-slate-300 opacity-90 z-10 h-full"
        >
          <div className="sidebar w-full md:w-96 h-screen bg-white">
            <div className="w-full text-white font-bold bg-slate-900 flex items-center py-4 relative px-4">
              <FontAwesomeIcon icon={faUser} />
              <p className="px-2">Hello, Sign In</p>
              <FontAwesomeIcon
                icon={faX}
                size="2x"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowSide(false)}
              />
            </div>
            {sidebar.map((item, index) => (
              <div className="border border-b-2 px-4" key={index}>
                <h2 className="capitalize font-bold text-2xl">{item.title}</h2>
                <ul>
                  <li className="py-2 flex items-center justify-between cursor-pointer capitalize hover:bg-slate-200">
                    {item.one}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </li>
                  <li className="py-2 flex items-center justify-between cursor-pointer capitalize hover:bg-slate-200">
                    {item.two}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </li>
                  <li className="py-2 flex items-center justify-between cursor-pointer capitalize hover:bg-slate-200">
                    {item.three}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderBottom;
