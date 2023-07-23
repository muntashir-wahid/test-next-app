import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((res) => res.json()),
  });

  return (
    <>
      <h2 className="text-2xl font-medium">Here is the all Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
