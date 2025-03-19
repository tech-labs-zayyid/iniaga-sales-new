import { Metadata } from 'next';
import ClientProduct from './client';
import axios from 'axios';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { username, id } = await params
  const productData = await getUserData(username, id);
  console.log(productData)
  return {
    title: `${productData.product_name}`,
    description: `${productData.description}`,
    openGraph: {
      title: `${productData.product_name}`,
      description: `${productData.description}`,
      images: [`${productData.product_images[0] || ''}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${productData.product_name}`,
      description: `${productData.description}`,
      images: [`${productData.product_images[0] || ''}`],
    },
  };
}

async function getUserData(username: string, id: string) {
  try {
    const response = await axios.get(`https://apiniaga.zayyid.com/public/product/detail/${username}/${id}`);
    if (response.data.status === "success") {
      return response.data.data;
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
  return null;
}

async function App({params}: any) {
  const { username, id } = await params
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
  const productData = await getUserData(username, id);
  return (
    <>
      <ClientProduct productDatas={productData} salesData={salesData} />
    </>
  );
}

export default App;