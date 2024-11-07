import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const Grafico = ({ bookData }) => {
  const genreData = bookData.reduce((acc, book) => {
    const genres = book.volumeInfo.categories || ["Desconhecido"];
    genres.forEach((genre) => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    return acc;
  }, {});

  const ratingData = bookData.map((book) => ({
    date: book.volumeInfo.publishedDate,
    rating: book.volumeInfo.averageRating || 0,
  }));

  const genreChartData = Object.keys(genreData).map((genre) => ({
    genre,
    count: genreData[genre],
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard de Estatísticas de Livros</h2>
      <BarChart width={600} height={300} data={genreChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="genre" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      <LineChart width={600} height={300} data={ratingData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Grafico;
