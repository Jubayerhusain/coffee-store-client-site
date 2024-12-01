import React from "react";
import { useLoaderData } from "react-router-dom";

function Details() {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src={photo}
          alt={name}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Details:</span> {details}
          </p>
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
