import React from 'react';
import Link from 'next/link';
import { FiSearch, FiHeart, FiUser, FiShoppingCart } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50 ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <img src="/logo.png" alt=""/>
          <h1 className='font-semibold pr-96 text-black mr-80'>Furniro</h1>

        {/* Navigation Links */}
        <ul className={cn("hidden md:flex space-x-6  text-black text-lg font-medium f")}>
          <li>
            <Link href="/" className={cn("hover:text-gray-600")}>Home</Link>
          </li>
          <li>
            <Link href="/Shop" className={cn("hover:text-gray-600")}>Shop</Link>
          </li>
          <li>
            <Link href="/blog" className={cn("hover:text-gray-600")}>Blog</Link>
          </li>
          <li>
            <Link href="/contact" className={cn("hover:text-gray-600")}>Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="p-0">
            <FiUser className="w-5 h-5 text-black hover:text-gray-600" />
          </Button>
          <Button variant="ghost" className="p-0">
            <FiSearch className="w-5 h-5 text-black hover:text-gray-600" />
          </Button>
          <Button variant="ghost" className="p-0">
            <FiHeart className="w-5 h-5 text-black hover:text-gray-600" />
          </Button>
          <Button variant="ghost" className="p-0">
            <Link href="/cart"><FiShoppingCart/></Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// Tailwind CSS Configurations (tailwind.config.js)
// Extend theme to include the gold color used in the logo
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
    },
  },
};

// Responsive Adjustments for Mobile (CSS handled via Tailwind)
// To make the navbar responsive, the 'hidden md:flex' on the navigation links ensures they are visible only on medium and larger screens. Add mobile-specific logic if needed, e.g., a hamburger menu.
