import React from "react";

export const cartItems = [
  {
    id: 1,
    name: 'Plant 1',
    price: '$10',
    image: 'https://assets.api.uizard.io/api/cdn/stream/ab148d11-028d-4fe4-af04-8c2710fca1cd.jpg',
  },
  {
    id: 2,
    name: 'Plant 2',
    price: '$15',
    image: 'https://assets.api.uizard.io/api/cdn/stream/2023b4f6-fdd2-4fdd-8a6f-0e9a43363020.jpg',
  },
  {
    id: 3,
    name: 'Plant 3',
    price: '$15',
    image: 'https://assets.api.uizard.io/api/cdn/stream/2961b030-674e-432d-9704-8212f592ec27.jpg',
  },
];

const Cart = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-4 flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[200px] h-auto lg:h-[300px]">
        <h1 className="text-[36px] font-medium">Featured</h1>
        <p className="text-[18px] mb-10">
          Our plants are 100% organic, <br />
          we don't use pesticides or <br />
          harmful chemicals.
          <br /> But please don't eat them
        </p>
        <button className="w-[153px] h-[33px] shadow-[0px_1px_0px_rgb(3,3,3)] border border-white bg-white text-black transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          Shop all Favourites
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="relative w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              className="h-[400px] w-full object-cover transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              src={item.image}
              alt={item.name}
            />
            {index === 2 && ( // Only add the button to the third item
              <button className="absolute top-5 right-2 bg-black text-white py-1 px-3 text-xs font-semibold transition-opacity duration-300 hover:opacity-80">
                Sold Out
              </button>
            )}
            <h1 className="text-[17px] text-[#c1c1c1ff] mt-5 transition-colors duration-300 hover:text-green-500">
              {item.name}
            </h1>
            <h1 className="text-[25px] font-semibold transition-colors duration-300 hover:text-green-500">
              {item.price}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
