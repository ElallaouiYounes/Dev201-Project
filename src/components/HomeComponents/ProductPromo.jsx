
const ProductPromo = ({productPromo}) => {
  const {img , OldPrix , NewPrix , Rating} = productPromo
  return (
    <div className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-white p-4 rounded-lg shadow-md w-[40%] h-[300px] flex flex-col justify-center items-center text-center">
    <img
      src={img}
      alt="Product 1"
      className="h-24 mx-auto mb-4"
    />
    <p className="text-xl font-bold text-gray-800"> {NewPrix} </p>
    <p className="text-sm text-gray-400 line-through"> {OldPrix} </p>
    <p className=" text-sm mt-2">
      ⭐  {Rating} 
    </p>
  </div>
  )
}

export default ProductPromo
