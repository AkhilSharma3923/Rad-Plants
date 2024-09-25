import React from 'react';

export const articles = [
  {
    id: 1,
    title: "How to water your freaking plants so they don't die after one week",
    edition: "Edition 291",
    image: "https://assets.api.uizard.io/api/cdn/stream/6c0ab3e9-f416-41d9-a079-da4b7116c71f.jpg",
    author: "Mellissa Bail",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Indoor Plant Care for Beginners",
    edition: "Edition 292",
    image: "https://assets.api.uizard.io/api/cdn/stream/3b5ffd6b-115b-4ac3-9e39-7e2875d27dd7.jpg",
    author: "John Doe",
  },
];

const Search = () => {
  return (
    <div className="p-4 max-w-[1400px] mx-auto mt-[200px] mb-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative h-[500px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-[350px] relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-10 right-0 bg-white text-black px-5 py-2 transition-opacity duration-300 hover:opacity-90">
                <p className="text-sm">Written by</p>
                <p className="font-semibold">{article.author}</p>
              </div>
            </div>
            <div className="h-[150px] mt-5">
              <p className="text-[#c1c1c1ff] transition-colors duration-300 hover:text-green-500">
                {article.edition}
              </p>
              <h1 className="text-[26px] font-semibold text-left mt-2 transition-transform duration-300 hover:translate-x-1 hover:text-green-500">
                {article.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
