import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { Link, useRouteLoaderData } from "react-router-dom";

export default function Notificacoes() {
  const loaderData = useRouteLoaderData("root-router");

  const notOpen =
    loaderData.length !== 0 &&
    loaderData.filter((notificacao) => notificacao.isOpen === false);
  console.log("notOpen", notOpen);

  return (
    <Box
      sx={{
        mt: "4rem",
        mb: "1rem",
        pb: "1rem",
        backgroundColor: "#E3F3FD",
        borderRadius: "5px",
      }}
    >
      <Typography variant="h4">Notificações</Typography>
      <nav aria-label="main mailbox folders">
        {loaderData.length === 0 && (
          <Typography>Você ainda não possui notificações</Typography>
        )}
        <List sx={{ p: "10px 5px" }}>
          {notOpen &&
            notOpen.length !== 0 &&
            notOpen.map((notificacao) => {
              return (
                <ListItem
                  key={notificacao.id}
                  disablePadding
                  sx={{
                    border: "solid 1px",
                    borderRadius: "10px",
                    borderColor: "#036897",
                    m: "5px auto",
                  }}
                >
                  <ListItemButton
                    component={Link}
                    to={`/tasks/${notificacao.tarefaId}`}
                    sx={{ borderRadius: "5px" }}
                  >
                    <ListItemText primary={notificacao.notification_text} />
                  </ListItemButton>

                  <IconButton
                    color="inherit"
                    component={Link}
                    // type="submit"
                    to={`${notificacao.id}?mode=update`}
                  >
                    <Badge color="secondary">
                      <MarkChatReadIcon />
                    </Badge>
                  </IconButton>
                </ListItem>
              );
            })}
        </List>
      </nav>
    </Box>
  );
}
