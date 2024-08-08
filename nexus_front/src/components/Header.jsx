import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProducts";
import ProductCarousel from "../pages/Products/ProductCarousel";
import BannerSlider from "./BannerSlider";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div>
        <BannerSlider />
      </div>
      <div className="flex px-[150px] py-[100px] items-center  justify-around">
        <div className="  items-center">
          <ProductCarousel />
        </div>

        <div className="xl:block  ">
          <div className="flex justify-center text-center">
            <h1 className="text-5xl font-medium ">New Products</h1>
          </div>

          <div className="grid px-5  grid-cols-2 ">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
