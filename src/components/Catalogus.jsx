import React from 'react';

export const categories = [
  {
    id: 1,
    name: 'Jungle Plants',
    image: 'https://assets.api.uizard.io/api/cdn/stream/2961b030-674e-432d-9704-8212f592ec27.jpg',
  },
  {
    id: 2,
    name: 'Succulents',
    image: 'https://assets.api.uizard.io/api/cdn/stream/f1ceb50f-3635-48fa-9717-11110a0f5703.jpg',
  },
  {
    id: 3,
    name: 'Flowering Plants',
    image: 'https://assets.api.uizard.io/api/cdn/stream/9cd6836f-9afc-4315-ba99-8155a7cb46e2.jpg',
  },
  {
    id: 4,
    name: 'Herbs',
    image: 'https://assets.api.uizard.io/api/cdn/stream/3b5ffd6b-115b-4ac3-9e39-7e2875d27dd7.jpg',
  },
];

const Catalogus = () => {
  return (
    <div className='max-w-[1400px] mx-auto p-4 mt-[120px]'>
      <h1 className='text-center text-[36px] font-semibold mb-8 transition-transform duration-300 hover:scale-105'>
        Categories
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20'>
        {categories.map((category) => (
          <div key={category.id} className='cart w-full'>
            <div className='w-full h-[430px] overflow-hidden'>
              <img 
                src={category.image} 
                alt={category.name} 
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' 
              />
            </div>
            <h1 className='mt-4 text-2xl font-medium text-left transition-all duration-300 hover:underline'>
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogus;
