//import {useNavigate} from 'react-router-dom'
import { categoryData } from "../CategoryData";
import CategoryCard from "./CategoryCard";
import ProductPromo from "./ProductPromo";

//import ProductCard from './ProductCard'
const ShopByCategory = () => {
  // const navigate = useNavigate()

  // const NaviagteProduct = () =>  {
  //        navigate('')
  // }

  const productPromo = {
    img: "public/images/lap.webp",
    OldPrix: "6999dh",
    NewPrix: "5999dg",
    Rating: "4.5|500 +sold",
  };

  return (
  <div className="w-full flex flex-col justify-center mt-24">


  <div className="text-center font-bold text-5xl mb-6">
    SHOB BY CATEGORY
  </div>

  <div className="flex flex-col lg:flex-row w-full lg:h-[500px] gap-6 p-4">
    <div className="bg-[#fff7e6] p-8 rounded-md shadow-md lg:basis-[50%] flex flex-col gap-6 m:flex-row">
      <div>
        <p className="text-lg font-semibold text-black mb-6">
          Everything is Good!
        </p>
        <button className="bg-black text-white p-2.5 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out">
          Shop now
        </button>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-4 mt-auto">
        <ProductPromo productPromo={productPromo} />
        <ProductPromo productPromo={productPromo} />
      </div>
    </div>

    <div className="lg:basis-[40%] grid grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:gap-x-14 lg:gap-y-1 mx-auto lg:mx-0">
      {categoryData.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  </div>
</div>

  
  );
};

export default ShopByCategory;
