import axios from "axios";
import ProductClient from "./client";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const { username } = await params
  const salesData = await getUserData(username);
  return {
    title: `${salesData.fullname}`,
    description: `${salesData.desc}`,
    keywords: `${salesData.desc}`,
    authors: [{ name: "iniaga.id" }],
    openGraph: {
      title: `${salesData.fullname}`,
      description: `${salesData.desc}`,
      images: [`${salesData.url_image}`],
      url: `${salesData.username}.iniaga.id`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${salesData.fullname}`,
      description: `${salesData.desc}`,
      images: [`${salesData.url_image}`],
    },
  };
}

async function getUserData(username: string) {
  try {
    const response = await axios.get(`https://apiniaga.zayyid.com/public/home/${username}`);
    if (response.data.status === "success") {
      return response.data.data;
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
  return null;
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
