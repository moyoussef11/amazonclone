import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div>
      <h3 className="capitalize font-bold">{title}</h3>
      <ul className='flex flex-col space-y-2'>
        {listItem.map((item) =>
          item.listData.map((data, index) => <li className='hover:underline duration-100 cursor-pointer' key={index}>{data}</li>)
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
