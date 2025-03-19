// utils/getProductData.ts
import axios from 'axios';

export async function getProductData(username: string, id: string) {
  try {
    const response = await axios.get(`https://apiniaga.zayyid.com/public/product/detail/${username}/${id}`);
    if (response.data.status === "success") {
      return response.data.data;
    }
  } catch (err) {
    console.error("Error fetching product data:", err);
  }
  return null;
}
