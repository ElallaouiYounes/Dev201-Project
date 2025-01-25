const CategoryCard = ({ category }) => {
  const { nameCategory, image } = category;

  return (
    <div className="w-[100%] cursor-pointer border border-gray-300 rounded-md  h-36 flex flex-col p-4 hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="font-bold text-lg ">{nameCategory}</h2>
      <img src={image} alt={nameCategory} className="self-end h-[80%]" />

     </div>
  );
};

export default CategoryCard;
