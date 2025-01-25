import { productData } from "../ProductData";
import Card from "./ProductCard";
const MoreToLove = () => {
  return (
    <div className="w-full flex flex-col justify-center mt-24">
      <div className="text-center font-bold text-5xl mb-6">More to love..</div>

      <div className="flex justify-center flex-wrap">
        {productData.map((product) =>
          product.id > 10 ? null : <Card key={product.id} product={product} />
        )}
      </div>
    </div>
  );
};

export default MoreToLove;
