import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const isDiscounted = product.labelledPrice > product.price;

  return (
    <Link
      to={"/products/overview/" + product.productId}
      className="w-[180px] sm:w-[250px] bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg m-2 cursor-pointer"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-[150px] sm:h-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1 uppercase">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 h-[3.5rem] overflow-hidden">
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-600 font-bold text-lg">
            Rs. {product.price.toLocaleString()}
          </span>
          {isDiscounted && (
            <span className="line-through text-gray-400 text-sm">
              Rs. {product.labelledPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
