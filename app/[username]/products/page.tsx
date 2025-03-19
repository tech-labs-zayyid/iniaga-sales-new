import axios from "axios";
import ProductClient from "./client";
import { Metadata } from "next";


type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const product = await fetch(`https://api.example.com/products/${params.id}`).then((res) => res.json());

  return {
    title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
    description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
    keywords: "car sales, buy car, best cars, luxury cars, new cars, used cars",
    authors: [{ name: "iniaga.id" }],
    openGraph: {
      title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
      description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
      description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
    },
  };
}

export default async function Products({ params }: any) {
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
    <>
      <ProductClient username={username} salesData={salesData} />
    </>
  )
}
