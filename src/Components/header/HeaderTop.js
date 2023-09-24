import React, { useState } from "react";
import { logo } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { liContent } from "./LiContent";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderTop = () => {
  const [all, setAll] = useState(false);
  const [bar, setBar] = useState(false);
  const cart = useSelector(state => state.cart);
  return (
    <>
      <div className="bg-slate-900 w-full h-14 flex items-center justify-between px-5 md:px-10 relative">
        <div className="w-24 py-1 px-2 headerHover">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full" />
          </Link>
        </div>
        <div className="hidden md:flex text-white items-center justify-center py-1 px-2 headerHover">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="capitalize text-sm">
            deliver to <br /> <span className="font-bold">egypt</span>
          </p>
        </div>
        <div className="hidden md:flex text-white grow h-10 relative">
          <span
            onClick={() => setAll(!all)}
            className="capitalize flex absolute h-full rounded items-center py-2 px-3 bg-slate-200 text-black font-semibold cursor-pointer z-10"
          >
            all
            <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
          </span>
          {all ? (
            <div className="w-64 bg-slate-200 absolute top-10 overflow-x-hidden rounded text-black h-60 p-2 z-10">
              <ul>
                {liContent.map((item, index) => (
                  <li key={index} className="liHover">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <input type="text" className="w-full rounded" />
          <span className="absolute text-black right-0 bg-yellow-300 py-1 px-4 h-full rounded flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        <div className="hidden md:flex text-white items-center justify-center py-1 px-2 headerHover">
          <p className="capitalize text-sm">
            hello,Sign in
            <br /> <span className="font-bold">accounts & lists</span>
          </p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="hidden md:flex text-white items-center justify-center py-1 px-2 headerHover">
          <p className="capitalize text-sm">
            returns <br /> <span className="font-bold">& orders</span>
          </p>
        </div>
        <Link to="/cart">
          <div className="hidden md:flex text-white headerHover py-1 px-2 relative items-center justify-center">
            <span className="bg-yellow-400 absolute left-6 -top-3 rounded-full px-1">
              {cart.length}
            </span>
            <FontAwesomeIcon icon={faCartShopping} />
            cart
          </div>
        </Link>
        <div
          onClick={() => setBar(!bar)}
          className="text-white cursor-pointer md:hidden"
        >
          {!bar ? (
            <FontAwesomeIcon icon={faBars} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faX} size="2x" />
          )}
        </div>
        {bar ? (
          <div className="bg-slate-900 absolute w-full h-auto left-0 px-6 top-14 z-50">
            <ul>
              <li className="py-3">
                <div className="flex items-center text-white py-1 px-2 headerHover">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="capitalize text-sm">
                    deliver to <br /> <span className="font-bold">egypt</span>
                  </p>
                </div>
              </li>
              <li className="py-3">
                <div className="flex text-white grow h-10 relative">
                  <span
                    onClick={() => setAll(!all)}
                    className="capitalize flex absolute h-full rounded items-center py-2 px-3 bg-slate-200 text-black font-semibold cursor-pointer"
                  >
                    all
                    <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                  </span>
                  {all ? (
                    <div className="w-64 bg-slate-200 absolute top-10 overflow-x-hidden rounded text-black p-2 z-10 h-52">
                      <ul>
                        {liContent.map((item, index) => (
                          <li key={index} className="liHover">
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                  <input type="text" className="w-full rounded" />
                  <span className="absolute text-black right-0 bg-yellow-300 py-1 px-4 h-full rounded flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
              </li>
              <li className="py-3">
                <div className="flex text-white items-center py-1 px-2 headerHover">
                  <p className="capitalize text-sm">
                    hello,Sign in
                    <br /> <span className="font-bold">accounts & lists</span>
                  </p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </li>
              <li className="py-3">
                <div className="flex text-white items-center py-1 px-2 headerHover">
                  <p className="capitalize text-sm">
                    returns <br /> <span className="font-bold">& orders</span>
                  </p>
                </div>
              </li>
              <li className="py-3">
                <Link to='/cart'>
                  <div className="flex text-white headerHover py-1 px-2 relative mt-3">
                    <span className="bg-yellow-400 absolute left-6 -top-3 rounded-full px-1">
                      {cart.length}
                    </span>
                    <FontAwesomeIcon icon={faCartShopping} />
                    cart
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <HeaderBottom />
    </>
  );
};

export default HeaderTop;
