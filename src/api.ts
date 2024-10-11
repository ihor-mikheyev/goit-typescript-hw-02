import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

interface ImageResult {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface Response {
  images: ImageResult[];
  totalPages: number;
}

async function fetchData(query: string, page: number): Promise<Response> {
  const response = await axios.get<{
    results: ImageResult[];
    total_pages: number;
  }>("/search/photos", {
    params: {
      client_id: "5-QdLFBmFSKwvpuInhmmyH7spX8mDk1MHypJu4eRBJ8",
      query,
      page,
      per_page: 9,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}

export default fetchData;
