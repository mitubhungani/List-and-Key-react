import React from 'react';

const ListDisplay = ({ title, description, category, discountPercentage, rating, brand, thumbnail, price }) => {
  return (
    <div className='my-3 shadow-sm p-3 item rounded-4'>
      <div className='text-center'>
        <h2>{title}</h2>
        <img src={thumbnail} alt={title} className='my-3 mx-auto max-w-full max-h-48 object-contain' />
      </div>
      <p className='text-left'>{description}</p>
      <p className='text-left'>Category: {category}</p>
      <p className='text-left'>Price: ${price}</p>
      <p className='text-left'>Discount Percentage: {discountPercentage}%</p>
      <p className='text-left'>Rating: {rating}/5</p>
      <div className='text-center'>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-3'>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ListDisplay;
