"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner({ banners }: { banners: any[] }) {
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  useEffect(() => {
    if (banners.length > 0) {
      const img = new window.Image();
      img.src = banners[0]?.image_url;
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
    }
  }, [banners]);
  return (
    <>
      {/* Hero Banner Carousel */}
      <div className="mt-[68px]">
        <div className="relative overflow-hidden"
          style={{
            // Menyesuaikan tinggi dengan rasio gambar pada perangkat mobile
            height: imageDimensions.width && imageDimensions.height
              ? `${(imageDimensions.height / imageDimensions.width) * 100}vw` // Menjaga rasio gambar pada mobile
              : '300px', // default height jika gambar belum dimuat
            maxHeight: '600px' // Membatasi tinggi maksimal pada desktop
          }}
        >
          {banners.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              className="h-full"
            >
              {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={banner.image_url}
                      alt={banner.description}
                      fill
                      className="object-cover w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No banners available</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
