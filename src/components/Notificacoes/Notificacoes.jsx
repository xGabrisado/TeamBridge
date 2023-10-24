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
import { Link } from "react-router-dom";

export default function Notificacoes() {
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
        <List sx={{ p: "10px 5px" }}>
          <ListItem
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
              to={`/tasks`}
              sx={{ borderRadius: "5px" }}
            >
              <ListItemText primary={"x pessoa enviou notificação"} />
            </ListItemButton>
            {/* {props.disabledBin && ( */}
            <IconButton
              color="inherit"
              component={Link}
              // to={`${props.id}?mode=delete`}
            >
              <Badge color="secondary">
                <MarkChatReadIcon />
              </Badge>
            </IconButton>
            {/* )} */}
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
