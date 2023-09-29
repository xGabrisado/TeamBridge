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
  // const date = createdAt.getTime();
  const date = createdAt.toLocaleString("pt-BR");

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={date}
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
        <Button
          component={Link}
          to={`comentario/${params.id}/editing`}
          variant="contained"
          color="secondary"
        >
          <EditIcon />
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
