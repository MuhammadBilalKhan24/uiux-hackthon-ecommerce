"use client"
import { useState } from 'react';

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-12">
      {/* Billing Details Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
              <input
                id="firstName"
                type="text"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium">Company Name (Optional)</label>
            <input
              id="company"
              type="text"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
            <select
              id="country"
              className="w-full mt-1 border rounded-md p-2"
            >
              <option>Sri Lanka</option>
            </select>
          </div>

          <div>
            <label htmlFor="street" className="block text-sm font-medium">Street address</label>
            <input
              id="street"
              type="text"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
              <input
                id="city"
                type="text"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm font-medium">Province</label>
              <select
                id="province"
                className="w-full mt-1 border rounded-md p-2"
              >
                <option>Western Province</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zip" className="block text-sm font-medium">ZIP code</label>
              <input
                id="zip"
                type="text"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input
                id="phone"
                type="text"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email address</label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium">Additional information</label>
            <textarea
              id="additionalInfo"
              rows={4}
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Product</h2>
        <div className="border rounded-md p-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold">
            <span>Total</span>
            <span className="text-yellow-600">Rs. 250,000.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">Payment Methods</h3>
          <div>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            {paymentMethod === 'bank' && (
              <p className="text-sm text-gray-500 mt-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            )}
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="mr-2"
              />
              Cash On Delivery
            </label>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-600 underline">privacy policy</a>.
        </p>

        <button className="mt-6 w-full bg-yellow-600 text-white font-bold py-3 rounded-md hover:bg-orange-500 transition">
          Place order
        </button>
      </div>
    </div>
  );
}
