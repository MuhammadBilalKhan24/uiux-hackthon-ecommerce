import React from 'react';
import Product from './product';
import { ButtonLink } from './button';




export default function Page() {
    return (
      <div className='grid grid-rows-2'>
        <div>
          <img className='h-[316px]' src="/78.png" alt="" />
        </div>
        <div><img className='h-[100px]' src="/63.png" alt="" /></div>
        <Product/>
        <ButtonLink/>
        <img src="/161.png" alt="" />
        
      </div>
    );
  }
