import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import InboxIcon from "@mui/icons-material/Inbox";

export default function ProjetosUsersList({ user }) {
  // console.log(props);
  return (
    <ListItem disablePadding sx={{ bgcolor: "white", p: "0 10px" }}>
      <ListItemText primary={`${user.userName} ${user.userLastName}`} />
      <IconButton color="inherit">
        <Badge color="secondary">
          <DeleteIcon />
        </Badge>
      </IconButton>
    </ListItem>
  );
}
