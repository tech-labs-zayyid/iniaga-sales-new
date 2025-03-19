"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Star, ShoppingCart, Heart, Fuel, Calendar, Gauge, Car, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const productData = {
  name: "2024 Mercedes-Benz S-Class S 580",
  price: 149900,
  rating: 4.9,
  reviews: 42,
  images: [
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2156&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
  ],
  description: {
    overview: "Experience unparalleled luxury with the 2024 Mercedes-Benz S-Class S 580. This flagship sedan combines cutting-edge technology with supreme comfort, setting new standards in the luxury automotive segment.",
    highlights: [
      {
        icon: <Calendar size={20} className="text-indigo-600" />,
        label: "Year",
        value: "2024"
      },
      {
        icon: <Gauge size={20} className="text-indigo-600" />,
        label: "Mileage",
        value: "1,250 mi"
      },
      {
        icon: <Fuel size={20} className="text-indigo-600" />,
        label: "Fuel Type",
        value: "Gasoline"
      },
      {
        icon: <Car size={20} className="text-indigo-600" />,
        label: "Transmission",
        value: "Automatic"
      }
    ],
    features: [
      "4.0L V8 Biturbo Engine",
      "9G-TRONIC Automatic Transmission",
      "4MATIC All-Wheel Drive",
      "AIRMATIC Air Suspension",
      "Mercedes-Benz User Experience (MBUX)",
      "Burmester® 4D Surround Sound System",
      "Executive Rear Seat Package",
      "Driver Assistance Package Plus"
    ],
    specifications: {
      engine: "4.0L V8 Biturbo",
      horsepower: "496 hp @ 5,500 rpm",
      torque: "516 lb-ft @ 2,000-4,000 rpm",
      acceleration: "0-60 mph in 4.4 seconds",
      transmission: "9-speed automatic",
      drivetrain: "4MATIC All-Wheel Drive",
      fuelEconomy: "16 city / 25 highway mpg",
      dimensions: "208.2\" L x 76.9\" W x 59.2\" H"
    },
    warranty: "4-year/50,000-mile Basic Warranty\n10-year/100,000-mile Powertrain Warranty\n4-year/50,000-mile Roadside Assistance"
  }
};

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionSection = ({ title, children, isOpen, onToggle }: AccordionSectionProps) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 flex justify-between items-center text-left"
      onClick={onToggle}
    >
      <span className="text-lg font-medium">{title}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        {children}
      </div>
    )}
  </div>
);

function ClientProduct({productDatas, salesData}: any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [openSection, setOpenSection] = useState("overview");
  console.log(productDatas)
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productDatas.product_images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productDatas.product_images.length) % productDatas.product_images.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Slider */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={productDatas.product_images[currentImage].image_url}
                  alt={`${productDatas.product_name} view ${currentImage + 1}`}
                  className="w-full h-[500px] object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex mt-4 gap-4 overflow-x-auto">
                {productDatas.product_images.map((itm: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`flex-shrink-0 ${currentImage === idx ? 'ring-2 ring-indigo-500' : ''}`}
                  >
                    <img
                      src={itm.image_url || ''}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-20 w-20 object-cover rounded-md"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 capitalize">{productDatas.product_name}</h1>
              <div className="mt-4 flex items-center">
                <p className="text-3xl font-semibold text-gray-900">{formatPrice(productDatas.price)}</p>
              </div>

              {/* Quick Highlights */}
              {/* <div className="mt-6 grid grid-cols-2 gap-4">
                {productData.description.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    {highlight.icon}
                    <div>
                      <p className="text-sm text-gray-500">{highlight.label}</p>
                      <p className="font-medium">{highlight.value}</p>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="mt-8 space-y-4">
                <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Link className='flex justify-center items-center gap-2' target="_blank" href={`https://wa.me/${salesData.phone_number}?text=Halo, Saya mau menanyakan produk ${productDatas.product_name}`} >
                    <PhoneCall className="size-4" />
                    Tanya Produk
                  </Link>
                </button>
              </div>

              <div className="mt-8 space-y-2">
                <AccordionSection
                  title="Description"
                  isOpen={openSection === "overview"}
                  onToggle={() => setOpenSection(openSection === "overview" ? "" : "overview")}
                >
                  <p className="leading-relaxed">{productDatas.description}</p>
                </AccordionSection>

                {/* <AccordionSection
                  title="Features"
                  isOpen={openSection === "features"}
                  onToggle={() => setOpenSection(openSection === "features" ? "" : "features")}
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productData.description.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionSection> */}

                {/* <AccordionSection
                  title="Specifications"
                  isOpen={openSection === "specifications"}
                  onToggle={() => setOpenSection(openSection === "specifications" ? "" : "specifications")}
                >
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(productData.description.specifications).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-3 rounded-lg">
                        <dt className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                        <dd className="font-medium mt-1">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionSection>

                <AccordionSection
                  title="Warranty Information"
                  isOpen={openSection === "warranty"}
                  onToggle={() => setOpenSection(openSection === "warranty" ? "" : "warranty")}
                >
                  <div className="space-y-2 whitespace-pre-line">
                    {productData.description.warranty}
                  </div>
                </AccordionSection> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientProduct;