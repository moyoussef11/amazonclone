import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, clear, decrementItem, deleteCart } from '../../rtk/slices/CartSlice';
import emptyCart from '../../images/emptyCart.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    let Total = 0;
    cart.map((item) => {
      Total += item.price * item.quantity;
      return setTotal(Total);
    })
  },[cart])

  const showCart = cart.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-center space-x-10 border-b-2 border-yellow-400 py-3"
    >
      <div className='w-full md:w-1/5'>
        <img src={item.image} className='w-full h-60 object-contain' alt={item.title} />
      </div>
      <div className="w-full md:w-3/5 flex flex-col space-y-3">
        <h2 className="font-bold text-2xl">{item.title}</h2>
        <p className="text-gray-500 font-semibold">{item.description}</p>
        <span className="capitalize font-bold">
          price:
          <span className="text-red-600">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </span>
        <div>
          <p className="bg-gray-200 w-fit py-1 px-4 rounded-md flex items-center capitalize font-bold">
            oty:
            <FontAwesomeIcon
              onClick={()=>dispatch(decrementItem(item.id))}
              icon={faMinus}
              className="icons"
            />
            {item.quantity}
            <FontAwesomeIcon
              onClick={() => dispatch(addToCart(item))}
              icon={faPlus}
              className="icons"
            />
          </p>
        </div>
        <button
          onClick={() => dispatch(deleteCart(item))}
          className="btnDelete"
        >
          Delete item
        </button>
      </div>
    </div>
  ));


  return (
    <>
      <div className="py-10 bg-slate-200 w-full overflow-hidden">
        {cart.length === 0 ? (
          <div className="flex items-center flex-col md:flex-row h-auto md:h-96 px-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={emptyCart} alt="emptyCart" />
            </div>
            <div className="w-full md:w-1/2 bg-white p-5 flex flex-col items-center justify-center space-y-2 capitalize">
              <h2 className="font-bold text-2xl">Your Cart feels lonely.</h2>
              <p className="text-sm">
                Your Shopping cart lives to serve. Give it purpose - fill it
                with books, electronics, videos, etc. and make it happy.
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
            <div className="flex flex-col md:flex-row space-y-3 space-x-10">
              <div className="w-full md:w-3/4 bg-white px-5 md:px-10">
                <div className="font-bold capitalize text-2xl flex items-center justify-between py-2 border-b-2 border-black">
                  <h2>Shopping Cart</h2>
                  <p className="font-semibold">Subtotal</p>
                </div>
                {showCart}
              </div>
              <div className="w-full md:w-3/12 px-5 md:px-10 py-3 bg-white flex flex-col space-y-2 h-fit">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-white bg-green-500 rounded-full p-1"
                  />
                  <p className="text-sm">
                    Your order qualifies for FREE Shipping Choose this option at
                    checkout. See details....
                  </p>
                </div>
                <div className="capitalize font-semibold">
                  <p>total:${total.toFixed(2)}</p>
                </div>
                <button className="w-full bg-yellow-400 py-1 font-bold capitalize rounded hover:bg-yellow-500 duration-200">
                  proceed to buy
                </button>
              </div>
              <button></button>
            </div>
            <button
              onClick={() => dispatch(clear())}
              className="btnDelete mt-4"
            >
              clear cart
            </button>
          </>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Cart;