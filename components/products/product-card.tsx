"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product, salesData }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { product_name, price, city_name, province_name, best_product, images, slug } = product;

  return (
    <Card className="py-0 pb-4 shadow-lg rounded-2xl w-full max-w-sm">
      <div className="relative w-full h-48">
        <Image
          src={images[currentImage]?.image_url}
          alt={product_name}
          layout="fill"
          objectFit="cover"
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <CardContent className="mt-2 space-y-2">
        <div className="flex gap-2 mt-2">
          {images.map((img: any, index: number) => (
            <button
              key={img.product_image_id}
              onClick={() => setCurrentImage(index)}
              className={`w-10 h-10 border-2 rounded-lg overflow-hidden ${currentImage === index ? "border-primary" : "border-gray-300"}`}
            >
              <Image src={img.image_url} alt={product_name} width={40} height={40} objectFit="cover" />
            </button>
          ))}
        </div>
        {best_product && <Badge variant="destructive">Best Seller</Badge>}
        <h3 className="text-lg font-semibold">{product_name}</h3>
        <p className="text-primary font-bold">Rp {price.toLocaleString("id-ID")}</p>
        {/* <Button className="w-full mt-4 cursor-pointer">Tanya Produk</Button> */}
        <div className="w-full flex flex-col gap-2">
          <Button asChild className="w-full sm:w-auto">
            <Link target="_blank" href={`https://wa.me/${salesData.phone_number}?text=${encodeURIComponent(`Halo, Saya mau menanyakan produk ${product_name}`)}`} >
              <PhoneCall className="size-4" />
              Tanya Produk
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href={`/product/${slug}`}>
              Detail Produk
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
