import React, { useEffect, useState } from "react";
import {
  faArrowRight,
  faArrowsUpDownLeftRight,
  faCartShopping,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "./ProductSkeleton";
import { useDispatch } from "react-redux";
import {  addToCart } from "../../rtk/slices/CartSlice";
import { addToWish } from "../../rtk/slices/WishSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  async function getProducts() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  const showProducts = products.map((product) => (
    <div
      key={product.id}
      className="bg-white h-auto relative py-8 rounded-md shadow hover:shadow-2xl"
    >
      <span className="text-xs capitalize absolute top-2 right-2 text-gray-400">
        {product.category}
      </span>
      <div className="w-full h-auto flex items-center justify-center relative group">
        <img
          src={product.image}
          alt="productImg"
          className="w-52 h-64 object-contain"
        />
        <ul className="w-full h-36 bg-gray-100 absolute bottom-[-175px] flex flex-col items-end justify-center gap-2 px-2 border-l border-r -z-10 group-hover:bottom-0 group-hover:z-0 duration-500">
          <li className="productLi">
            compare <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
          </li>
          <li
            onClick={() => dispatch(addToCart(product))}
            className="productLi"
          >
            Add to Cart
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
          <Link className="productLi" to={`/products/details/${product.id}`}>
            <li>
              View Details
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </li>
          </Link>
          <Link to='/wishList' className="productLi">
            <li onClick={()=>dispatch(addToWish(product))}>
              Add to Wish List
              <FontAwesomeIcon icon={faEye} className="ml-2" />
            </li>
          </Link>
        </ul>
      </div>
      <div className="px-4 z-10 bg-white flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">
            {product.title.substring(0, 10)}
          </h2>
          <p>${product.price}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            {product.description.substring(0, 100)}
          </p>
          <div className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full font-bold capitalize bg-yellow-400 border rounded py-1 active:bg-yellow-500 duration-200"
        >
          add to cart <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="max-w-screen-2xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
      {isLoading && <ProductSkeleton num={20} />}
      {showProducts}
    </div>
  );
};

export default Products;
