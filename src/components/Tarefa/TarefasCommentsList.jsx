import {
  Button,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useParams } from "react-router-dom";

export default function TarefasCommentsList(props) {
  const params = useParams();
  const createdAt = new Date(props.dados.created_At);
  const updatedAt = new Date(props.dados.updated_At);
  // const date = createdAt.getTime();
  const date = createdAt.toLocaleString("pt-BR");

  const isEdited = createdAt.valueOf() !== updatedAt.valueOf();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${date} ${isEdited ? "(Editado)" : ""}`}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* {loaderDataComment.usuario.userName} */}
                {`${props.usuario.userName} ${props.usuario.userLastName} `}
              </Typography>
              {`- ${props.comentario}`}
            </>
          }
        />
        {!props.taskData.isDone && (
          <Button
            component={Link}
            to={`comentario/${props.dados.id}/editing`}
            variant="contained"
            color="secondary"
          >
            <EditIcon />
          </Button>
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
