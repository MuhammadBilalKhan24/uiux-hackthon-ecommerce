import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className=" justify-items-end p-20 h-52">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/mt.jpg" // Ensure the image is in the public/images folder
          alt="Interior Decor"
          layout="fill"
          objectFit="cover"
        />
      </div>
    {/* <img src="/mt.jpg" alt="" /> */}
    </section>
  );
};

export default Hero;


