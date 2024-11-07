import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <Dialog open={show} onClose={onClose}>
      <DialogTitle>{item.volumeInfo.title}</DialogTitle>
      <DialogContent>
        <img
          src={thumbnail}
          alt=""
          style={{ width: 150, height: 200, marginRight: 20 }}
        />
        <Typography variant="h6">{item.volumeInfo.authors}</Typography>
        <Typography variant="subtitle1">
          {item.volumeInfo.publisher}{" "}
          <span>{item.volumeInfo.publishedDate}</span>
        </Typography>
        <Typography variant="body2" style={{ marginTop: "2rem" }}>
          {item.volumeInfo.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button href={item.volumeInfo.previewLink} color="primary">
          More
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
