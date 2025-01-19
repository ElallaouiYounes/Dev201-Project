
const CategoryCard = ({ category }) => {
  const { nameCategory, image } = category;

  return (
    <div className="ms:w-60 cursor-pointer border border-gray-300 rounded-md w-80 h-36 flex flex-col justify-between p-4 relative hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="font-bold text-lg  absolute top-4 left-4">{nameCategory}</h2>
      <img
        src={image}
        alt={nameCategory}
        className="absolute bottom-4 right-4 h-24 object-contain"
      />
    </div>
  );
};

export default CategoryCard;
