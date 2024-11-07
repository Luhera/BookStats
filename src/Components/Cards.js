import React, { useState } from "react";
import Modal from "./Modal";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

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
        style={{ height: "100%" }}
      >
        {thumbnail && (
          <CardMedia
            component="img"
            height="200"
            image={thumbnail}
            alt="Book Thumbnail"
          />
        )}
        <CardContent>
          <Typography variant="h6" noWrap>
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" noWrap>
            {book.volumeInfo.authors}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {amount !== "Not for sale" ? `₹${amount}` : amount}
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
