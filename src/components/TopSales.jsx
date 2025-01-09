import ProductCard from "./ProductCard";

function TopSales({ productData }) {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="text-center font-bold text-4xl my-6">TOP SALES</div>
      <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-8 my-6 min-w-max px-4">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSales;
