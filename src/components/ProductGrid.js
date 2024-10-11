//sceed_front_two/src/components/ProductGrid.js

import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded shadow p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover mb-4"
    />
    <h3 className="font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-600 mb-2">{product.price}</p>
    <Link
      to={`/product/${product.id}`}
      className="bg-black text-white px-4 py-2 rounded block text-center">
      View Details
    </Link>
  </div>
);

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
