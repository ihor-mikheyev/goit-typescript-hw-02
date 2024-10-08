import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

async function fetchData(query, page) {
  const response = await axios.get("/search/photos", {
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
