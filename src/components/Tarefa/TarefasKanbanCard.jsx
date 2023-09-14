import {
  Card,
  CardContent,
  Box,
  Button,
  CardActionArea,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function TarefasKanbanCard(props) {
  return (
    <Card variant="outlined" style={{ marginBottom: "8px" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          {/* <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          ></Box> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          component={Link}
          to={`${props.id}?status=${props.buttonTo1}`}
          color="primary"
          size="small"
          style={{ marginTop: "8px" }}
          sx={{ fontSize: "10px", fontWeight: "bold" }}
        >
          {props.buttonTo1}
        </Button>
        {props.buttonTo2 && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`?status=${props.buttonTo2}`}
            size="small"
            style={{ marginTop: "8px" }}
            sx={{ fontSize: "10px", fontWeight: "bold" }}
          >
            {props.buttonTo2}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
