import axios from "axios";

const API_URL = "https://ecom-back-strapi.onrender.com/api/animes";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMzY2NjQ5LCJleHAiOjE3MzU5NTg2NDl9.o5XCI4vv96tj3E_IGIVfqzZb5KMUoN5UAyeOSb3s0i4";

export const fetchAnimes = async () => {
  try {
    const response = await axios.get(`${API_URL}`,{
        headers: {
            "Authorization": token,
            "Content-Type":"application/json"
        }
    });
    return response.data;
  } catch (error) {
    // Retorna um objeto de erro
    return { error: true, message: error.message || "Erro ao buscar animes." };
  }
};
