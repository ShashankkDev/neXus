import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[30rem] my-[1rem] mx-[1rem]   p-3 relative bg-white flex justify-between flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] rounded"
        />
        <HeartIcon product={product} />
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="p-4">
          <h2 className="flex justify-between items-center">
            <div className="text-lg">{product.name}</div>
            <span className=" text-[#2c2c2e] text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-[#e5e5ea] dark:text-pink-300">
              ₹ {product.price}
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
