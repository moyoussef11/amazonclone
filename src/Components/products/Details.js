import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailsSkeleton from "./DetailsSkeleton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/CartSlice";

const Details = () => {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  async function getProduct() {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {isLoading && <DetailsSkeleton />}
      <div className="container w-full h-screen mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={product.image} className="w-80 h-80" alt={product.title} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col space-y-4">
          <h3 className="font-bold text-2xl">{product.title}</h3>
          <p className="text-sm font-semibold">{product.description}</p>
          <span className="text-red-500 font-bold">price:${product.price}</span>
          <p className="capitalize">category:{product.category}</p>
          {isLoading ? (
            ""
          ) : (
            <div>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full md:w-auto font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200 px-2"
              >
                add to cart
              </button>
              <Link to="/cart">
                <button className="w-full md:w-auto font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200 px-2">
                  go to cart
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
