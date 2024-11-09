import React, { useState } from "react";
import Modal from "./Modal";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "../Styles/global.css";

const Cards = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  const thumbnail = book.volumeInfo.imageLinks?.smallThumbnail || "";
  const amount = book.saleInfo.listPrice?.amount || "Not for sale";

  return (
    <>
      <MuiCard
        onClick={() => {
          setShow(true);
          setItem(book);
        }}
        className="card"
      >
        {thumbnail && (
          <CardMedia
            component="img"
            image={thumbnail}
            alt="Book Thumbnail"
            className="card-media"
          />
        )}
        <CardContent>
          <Typography variant="h6" noWrap>
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" noWrap>
            {book.volumeInfo.authors?.join(", ")}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {amount}
          </Typography>
        </CardContent>
      </MuiCard>
      {show && bookItem && (
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
};

export default Cards;
