// Services/bookService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY; // Obtém a chave de API do arquivo .env

const getBooks = async (query = "") => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${API_KEY}`
    );
    return response.data.items || [];
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};

const bookService = { getBooks };

export default bookService;
