import { Metadata } from "next";
import { Navbar1 } from "@/components/navbar";
import axios from "axios";
import React from "react";
import { Footer } from "@/components/footer";

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const { username } = await params
  return {
    title: `${username} - Find Your Dream Car | Best Car Sales`,
    description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
    keywords: "car sales, buy car, best cars, luxury cars, new cars, used cars",
    authors: [{ name: "iniaga.id" }],
    openGraph: {
      title: `${username} - Find Your Dream Car | Best Car Sales`,
      description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
      url: "https://yourwebsite.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${username} - Find Your Dream Car | Best Car Sales`,
      description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
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
