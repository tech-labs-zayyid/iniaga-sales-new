import { Metadata } from 'next';
import ClientProduct from './client';
import axios from 'axios';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { username, id } = await params
  const salesData = await getUserData(username, id);
  return {
    title: `Toyota Camry - Buy Now`,
    description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
    openGraph: {
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU'],
    },
    twitter: {
      card: "summary_large_image",
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU'],
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