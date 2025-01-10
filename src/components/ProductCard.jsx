import { FaStar } from "react-icons/fa";
function ProductCard({ product }) {
  const { name, price, rating, sold, image } = product;

  return (
    <div className="w-64 rounded-lg border border-solid border-black p-2">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-5" />
      <div className="mx-2">
        <p className="text-sm font-semibold mb-1">{name}</p>
        <p className="text-sm font-bold mb-1">{price}</p>
        <p className="flex items-center gap-1 pb-2">
          <FaStar color="#facc15" />
          <span className="text-sm">
            {rating} | {sold}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
