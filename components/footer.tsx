import { Car, Mail, MapPin, Phone, YoutubeIcon } from "lucide-react";
import Link from "next/link";

const Footer = ({data}: any) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-xl font-bold">{data?.fullname || ''}</span>
          </div>
          <p className="text-gray-400 mb-6">
            {data?.desc || ''}
          </p>
          <div className="flex space-x-4">
            {
              data?.social_media?.map((itm:any) => {
                if(itm?.social_media_name === 'youtube'){
                  return(
                    <Link target="_blank" href={itm?.link_embed} className="text-gray-400 hover:text-blue-400 transition">
                      <YoutubeIcon className="h-6 w-6" />
                    </Link>
                  )
                }
              })
            }
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-400 hover:text-blue-400 transition">Products</Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition">Gallery</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">+62 123 456 789</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">sales@autopro.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 AutoPro Sales. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export { Footer };
