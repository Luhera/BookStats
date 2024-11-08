import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Card from "../Components/Cards";
import Grafico from "../Components/grafico";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchBook = () => {
    setLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10`
      )
      .then((res) => setBookData(res.data.items || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const filteredBooks = bookData.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container
      maxWidth="lg"
      className="header"
      sx={{ display: "flex", flexDirection: "column", height: "100vh", p: 0 }}
    >
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="inherit" sx={{ fontWeight: "bold" }}>
          A room without books is like a body without a soul.
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8B5E3C",
          color: "#EAD3A2",
          padding: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Find Your Book
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "80%",
            maxWidth: 400,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ backgroundColor: "#fff", borderRadius: 1, flex: 1 }}
          />
          <Button variant="contained" onClick={searchBook}>
            Search
          </Button>
        </Box>
        <Box mt={4}>
          <img
            src={`${process.env.PUBLIC_URL}/images/bg2.png`}
            alt="Kids Reading Books"
            style={{ width: "150px", height: "auto" }}
          />
        </Box>
      </Box>

      <Container className="container" sx={{ mt: 4, padding: "20px" }}>
        {loading ? (
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "center", mt: 4 }}
          >
            Loading...
          </Typography>
        ) : bookData.length > 0 ? (
          <>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                Livros Encontrados
              </Typography>
              <Grid container spacing={2}>
                {bookData.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card book={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                Dashboard de Estatísticas
              </Typography>
              <Grafico bookData={bookData} />
            </Box>
          </>
        ) : (
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "center", mt: 4 }}
          >
            Nenhum livro encontrado.
          </Typography>
        )}
      </Container>
    </Container>
  );
};

export default Main;
