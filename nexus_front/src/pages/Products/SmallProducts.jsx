import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <>
      <div className="w-[16rem]  p-5">
        <div className="relative ">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto rounded"
          />
          <HeartIcon product={product} />
        </div>

        <div className="p-[5px]">
          <Link to={`/product/${product._id}`}>
            <h2 className="flex justify-between items-center">
              <div>{product.name}</div>
              <span className=" text-[#e4e4e6] text-[13px] font-medium mr-2 px-2.5 py-0.5 rounded-full bg-[#aeaeb2] ">
                ₹ {product.price}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallProduct;
