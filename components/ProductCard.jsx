export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center gap-3 border border-gray-700 p-4 rounded-md">
      <p>{product.title}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
