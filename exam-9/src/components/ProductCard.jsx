import React from "react";

const ProductCard = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="border p-4 m-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-32 h-32 object-contain mx-auto" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-500 text-sm">{category}</p>
      <p className="text-gray-700 mt-2">${price}</p>
      <p className="text-sm text-gray-600 mt-2">{description.substring(0, 100)}...</p>
      <p className="text-yellow-500 mt-2">⭐ {rating?.rate} ({rating?.count} reviews)</p>
    </div>
  );
};

export default ProductCard;
