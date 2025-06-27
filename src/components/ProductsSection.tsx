
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Digital Weighing Scales",
      description: "High-precision digital scales for industrial and commercial use",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Electronic Balance Systems",
      description: "Advanced electronic balance solutions for accurate measurements",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Industrial Weighing Solutions",
      description: "Heavy-duty weighing equipment for industrial applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Precision Measurement Tools",
      description: "Professional measurement instruments for various industries",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {product.title}
              </h3>
              <p className="text-white/80 text-sm">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
