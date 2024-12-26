
const products = [
    {
      id: 1,
      name: "Asgaard Sofa",
      image: "/157.png",
      reviews: 204,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Nordic Sofa",
      image: "/156.png",
      reviews: 148,
      rating: 4.7,
    },
  ];
  
  export default function Page() {
    return (
        <div>
            <img src="11.png" alt="" />
      <div className="bg-black text-white py-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium underline">View More</h2>
            <select className="bg-yellow-600 text-white font-medium py-2 px-4 rounded-md">
              <option>Choose a Product</option>
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
  
          <div className="grid grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-xs h-auto object-cover rounded-md mb-4"
                />
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-gray-400">{product.reviews} Reviews</span>
                  </div>
                  <button className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-500">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src="/160.png" alt="" />
      </div>
    );
  }
  