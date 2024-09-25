import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[800px] mx-auto text-center mt-[120px] p-4">
      <h2 className="text-3xl font-medium mb-6">
        Get 15% off your next order,
        <br />
        Subscribe to our Newsletter
      </h2>
      <div className="flex justify-center gap-2 items-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="p-3 w-[120px] bg-black text-white rounded-md hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
