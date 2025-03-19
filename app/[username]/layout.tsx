import { Metadata } from "next";
import { Navbar1 } from "@/components/navbar";
import axios from "axios";
import React from "react";
import { Footer } from "@/components/footer";

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

export default async function UserLayout({ children, params }: { children: React.ReactNode, params: { username: string }  }) {
  const { username } = await params
  const salesData = await getUserData(username);
  return <>
    <Navbar1 logoString={username} />
    {children}
    <Footer data={salesData} />
  </>;
}
