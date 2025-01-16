// import { FaStar } from "react-icons/fa";
// function ProductCard({ product }) {
//   const { name, price, rating, sold, image } = product;

//   return (
//     <div className="w-64 rounded-sm border border-solid border-black p-2">
//       <img src={image} alt={name} className="w-full h-48 object-contain mb-5" />
//       <div className="mx-2">
//         <p className="text-sm font-semibold mb-1">{name}</p>
//         <p className="text-sm font-bold mb-1">{price}</p>
//         <p className="flex items-center gap-1 pb-2">
//           <FaStar color="#facc15" />
//           <span className="text-sm">
//             {rating} | {sold}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ product }) => {
  const { name, price, rating, sold, image } = product;
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-sm w-[230px] h-[300px] m-4 py-2">
      <div className="w-[90%] h-[70%] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="flex flex-col justify-center w-[90%] h-[20%] font-semibold">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="flex flex-row items-center gap-2 w-[90%] h-[10%]">
        <FaStar size={20} color="#FFD700" />
        <p>{rating} | {sold}</p>
      </div>
    </div>
  );
};

export default Card;
