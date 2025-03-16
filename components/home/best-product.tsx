import React from 'react'
import ProductCard from '../products/product-card'

export default function BestProduct({data}: any) {
  return (
    <section className="py-6 pb-12">
      <div className="container max-w-4xl mx-auto px-5 lg:px-0">
        <h1 className="mb-10 text-5xl md:text-6xl font-bold text-center tracking-tight px-6">Best Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data?.product?.map((product: any) => (
            <ProductCard key={product.slug} product={product} salesData={data} />
          ))}
        </div>
      </div>
    </section>
  )
}
