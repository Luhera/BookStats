import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import Card from "../Components/Cards";
import Grafico from "../Components/grafico";
import axios from "axios";
import "../Styles/global.css";
import { useTheme } from "@mui/material/styles";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

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

  return (
    <Container maxWidth="xl" className="header">
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          textAlign: "center",
          height: "40vh",
        }}
      >
        <Typography variant="h4" color="inherit" sx={{ fontWeight: "bold" }}>
          A room without books is like a body without a soul.
        </Typography>
      </Box>

      <Box className="search-box" sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Find Your Book
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            sx={{
              flexGrow: 1,
              backgroundColor: theme.palette.background.default,
              borderRadius: 1,
              input: { color: theme.palette.text.primary },
            }}
          />
          <Button
            variant="contained"
            onClick={searchBook}
            className="search-button"
          >
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

      <Divider sx={{ my: 4 }} />

      <Container className="container">
        {loading ? (
          <Typography
            variant="body1"
            color="text.primary"
            className="loading-message"
            sx={{ textAlign: "center", py: 4 }}
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

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Dashboard de Estatísticas
              </Typography>
              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  marginTop: 3,
                }}
              >
                <Grafico bookData={bookData} />
              </Box>
            </Box>
          </>
        ) : (
          <Typography
            variant="body1"
            color="text.primary"
            className="no-books-message"
            sx={{ textAlign: "center", py: 4 }}
          >
            Nenhum livro encontrado.
          </Typography>
        )}
      </Container>
    </Container>
  );
};

export default Main;
