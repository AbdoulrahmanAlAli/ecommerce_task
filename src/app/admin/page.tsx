"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@prisma/client";
import ProductCard from "@/components/product/ProductCard";
import Loading from "@/components/Loading";

const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="p-6 w-full h-full">
      <div className="w-full h-auto flex-wrap gap-6 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 flex justify-center items-center container overflow-y-auto">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
