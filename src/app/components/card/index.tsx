import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow-md">
          <Image src={image} alt={title} className="h-48 w-full object-cover" width={400} height={200} />
      <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      </div>
    </div>
  );
};

export default Card;