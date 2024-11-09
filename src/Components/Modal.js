import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import "../Styles/global.css";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
  const categories = item.volumeInfo.categories?.join(", ") || "N/A";
  const averageRating = item.volumeInfo.averageRating || "No rating";

  return (
    <Dialog open={show} onClose={onClose}>
      <DialogTitle>{item.volumeInfo.title}</DialogTitle>
      <DialogContent>
        <img src={thumbnail} alt="" className="modal-thumbnail" />
        <Typography variant="h6">
          {item.volumeInfo.authors?.join(", ")}
        </Typography>
        <Typography variant="subtitle1">
          {item.volumeInfo.publisher}{" "}
          <span>{item.volumeInfo.publishedDate}</span>
        </Typography>
        <Typography variant="body2" className="modal-content">
          {item.volumeInfo.description}
        </Typography>
        <Typography variant="body2" className="modal-genres">
          <strong>Genres:</strong> {categories}
        </Typography>
        <Typography variant="body2" className="modal-rating">
          <strong>Average Rating:</strong> {averageRating}
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
