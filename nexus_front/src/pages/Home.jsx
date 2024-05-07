import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Footer from "../components/Footer";

const Home = () => {
  const { keyword } = useParams();
  console.log(keyword);
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });
  return (
    <>
      <div className="flex justify-center items-center text-[3rem] my-2 font-semibold ">
        NEXUS
      </div>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-around place-items-center  items-center ">
            <h1 className="ml-[15rem] mt-[10rem] text-[3rem] font-semibold w-[850px] text-[#48484a]">
              <strong className="text-black font-bold">Experience</strong> the
              joy of shopping for the products you love.
            </h1>

            <Link
              to="/shop"
              className="bg-[#1c1c1e] flex items-center text-2xl  text-white font-bold rounded-full  py-5 px-5 mr-[18rem] mt-[10rem] hover:py-7 hover:px-7 hover:bg-[#48484a]  hover:transform ease-in-out duration-200"
            >
              <PiShoppingCartSimpleThin />
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
