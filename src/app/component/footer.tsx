import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-slate-100 text-base-content p-10 h-80">
    <div className=''>
        <h1 className='font-bold'>Funiro.</h1>
    <p className='mt-5'>400 University Drive Suite 200 Coral</p>
    <p> Gables </p>
    <p>,FL 33134 USA</p>
    </div>
    
  <nav className='font-semibold'>
    <h6 className="footer-title">Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Shop</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav className='font-semibold'>
    <h6 className="footer-title">Help</h6>
    <a className="link link-hover">Payment Options</a>
    <a className="link link-hover">Return</a>
    <a className="link link-hover">Privacy Policies</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email address"
          className="underline join-item" />
        <button className="bg-white text-black underline font-semibold">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
<footer className="flex justify-start bg-white text-base-content p-4">
  <aside>
    <p>2023 furino. All rights reverved</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
