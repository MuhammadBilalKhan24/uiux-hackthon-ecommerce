import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
  altText: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, altText }) => (
  <div className="flex flex-col items-center text-center">
    <div className="overflow-hidden rounded-lg shadow-md">
      <Image
        src={imageSrc}
        alt={altText}
        width={300}
        height={300}
        className="object-cover w-full h-[300px]"
      />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);

const BrowseTheRange: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Browse The Range</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Dining" imageSrc="/c1.png" altText="Dining Room" />
<Card title="Living" imageSrc="/c2.png" altText="Living Room" />
<Card title="Bedroom" imageSrc="/c3.png" altText="Bedroom" />

        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
