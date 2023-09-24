import React from 'react';
import logo from '../../images/logo.png';
import egypt from '../../images/eg.webp';
import FooterMiddleList from './FooterMiddleList';
import { liFooter } from './liFooter';

const FooterMiddle = () => {
  
  return (
    <div className="px-4 bg-slate-800 text-white w-full">
      <div className="py-5 grid grid-cols-2 md:grid-cols-4 w-full border-b-2 text-center">
        {liFooter.map((item, index) => (
          <FooterMiddleList
            key={index}
            title={item.title}
            listItem={item.listItem}
          />
        ))}
      </div>
      <div className='flex items-center justify-center py-5 space-x-2 flex-wrap space-y-1'>
        <div >
          <img src={logo} alt='logo' className='py-2 px-3 w-28' />
        </div>
        <div>
          <p className="capitalize font-semibold border py-2 px-3 hover:border-yellow-500 cursor-pointer">english</p>
        </div>
        <div className='flex items-center gap-2 border py-2 px-3 hover:border-yellow-500 cursor-pointer'>
          <img src={egypt} alt='logo' className="w-7" />
          <p className='capitalize font-bold'>egypt</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;