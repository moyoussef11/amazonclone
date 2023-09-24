import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../rtk/slices/CartSlice';
import { Link } from 'react-router-dom';

const WishList = () => {
    const wishProduct = useSelector((state) => state.wish);
    const dispatch = useDispatch();
    console.log(wishProduct);
  return (
    <div>
      {wishProduct.length === 0 ? (
        <div className="flex items-center flex-col md:flex-row h-auto md:h-96 px-10 justify-center">
          <div className="w-full md:w-1/2 bg-white p-5 flex flex-col items-center justify-center space-y-2 capitalize">
            <h2 className="font-bold text-2xl">Your wishList feels lonely.</h2>
            <p className="text-sm">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="w-full md:w-auto font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200 px-2">
                continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <h2 className="text-center text-2xl font-bold py-4">WishList</h2>
          <div className="cards flex flex-col md:flex-row items-baseline justify-center flex-wrap gap-2 bg-white">
            {wishProduct.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 border p-4 flex flex-col items-center space-y-3"
              >
                <h2 className="font-bold">{item.title.substring(0, 20)}</h2>
                <img src={item.image} className="w-52 h-52 object-contain" />
                <p className="text-sm">{item.description.substring(0, 150)}</p>
                <p className="text-red-600 font-bold">price:${item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="w-full font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200"
                >
                  add to cart <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WishList