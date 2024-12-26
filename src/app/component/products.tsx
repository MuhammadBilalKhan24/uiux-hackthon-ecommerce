import React from 'react'
import { Button } from '@/components/ui/button'

const Products = () => {
  return (
    <div>
      <div><h1 className='font-extrabold mb-10 flex justify-self-center -mt-52 w[269px] h[48px] align-middle text-3xl'>Our Products</h1></div>
      <div className='grid grid-cols-4'>
        <div className='w-[285px] h-[446px]'><img src="/p1.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p2.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p3.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p4.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p5.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p6.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p7.png" alt="" /></div>
        <div className='w-[285px] h-[446px]'><img src="/p8.png" alt="" /></div>
        </div>
        <div className='mt-10 text-orange-300 border-2 border-amber-100 flex justify-self-center'><Button variant="outline">Show More</Button>
        </div>
    </div>
  )
}

export default Products
