import axios from 'axios'
import Banner from '@/components/home/banner';
import { Hero1 } from '@/components/home/hero';
import BestProduct from '@/components/home/best-product';
import { Gallery4 } from '@/components/home/gallery';
import Testimonial01 from '@/components/testimonial-03/testimonial-03';

export default async function PageHome({ params }: any) {
  const { username } = await params
  let salesData = null;
  let error = null;

  try {
    const response = await axios.get(
      `https://apiniaga.zayyid.com/public/home/${username}`
    );

    if (response.data.status === "success") {
      // console.log(response.data.data)
      salesData = response.data.data;
    } else {
      error = "Gagal mengambil data.";
    }
  } catch (err: any) {
    error = err.message;
  }
  return (
    <div>
      <Banner banners={salesData.banner || []} />
      <Hero1 data={salesData} />
      <BestProduct data={salesData} />
      <Gallery4 data={salesData} />
      <Testimonial01 data={salesData} />
    </div>
  )
}
