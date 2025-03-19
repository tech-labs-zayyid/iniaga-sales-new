"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Filter, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import axios from "axios"
import ProductCard from "@/components/products/product-card"
import ProductsCard from "@/components/products-section/product-card"


export default function ProductClient({username, salesData}: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get("c")
  const pathname = usePathname();

  useEffect(() => {
    setSelectedCategory(search)
  }, [search])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://apiniaga.zayyid.com/public/product/${username}`)
        if (response.data.status === "success" && response.data.data) {
          setProducts(response.data.data)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchProducts()
    }
  }, [username])

  const allProducts = [
    { name: "Toyota Camry", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80", description: "Sedan ikonik yang menetapkan standar untuk kenyamanan dan keandalan.", price: "Mulai dari Rp 799.000.000", category: "Sedan" },
    { name: "Toyota RAV4", image: "https://images.unsplash.com/photo-1633696699971-ae0e14c3f10e?w=800&q=80", description: "SUV siap petualangan dengan fitur keselamatan canggih.", price: "Mulai dari Rp 899.000.000", category: "SUV" },
    { name: "Toyota Highlander", image: "https://images.unsplash.com/photo-1632183903330-62c5df4767f9?w=800&q=80", description: "SUV ramah keluarga dengan fitur premium.", price: "Mulai dari Rp 999.000.000", category: "SUV" },
    { name: "Toyota Corolla", image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80", description: "Sedan kompak dengan efisiensi bahan bakar tinggi.", price: "Mulai dari Rp 499.000.000", category: "Sedan" },
    { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1625076307714-a0ce1aa4509c?w=800&q=80", description: "MPV serbaguna untuk keluarga modern.", price: "Mulai dari Rp 399.000.000", category: "MPV" },
    { name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1625077427338-8e511f53b27c?w=800&q=80", description: "SUV tangguh dengan kemampuan off-road.", price: "Mulai dari Rp 599.000.000", category: "SUV" }
  ]

  const categories = Array.from(new Set(products?.map(product => product.product_sub_category)))
  console.log('c', categories, products)
  const filteredProducts = selectedCategory
    ? products.filter(product => product.product_sub_category === selectedCategory)
    : products

  const clearCategoryFilter = () => {
    setSelectedCategory(null)
  }

  const FilterSection = () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Kategori</h2>
      <div className="space-y-2">
        <button
          onClick={clearCategoryFilter}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          Semua
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
            }}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            <p className="uppercase">{category}</p>
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Semua Produk</h1>
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-gray-600"
            >
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>

          {loading ? (
            <div className="text-center text-gray-600">Loading produk...</div>
          ) : (
            <div className="flex gap-8">
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterSection />
                </div>
              </div>

              {isMobileFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                  <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold">Filter</h2>
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <FilterSection />
                  </div>
                </div>
              )}

              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts?.map(product => (
                    <ProductsCard key={product.slug} product={product} salesData={salesData} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
