import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import InboxIcon from "@mui/icons-material/Inbox";

export default function ProjetosList(props) {
  // console.log(props);
  return (
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={`${props.id}`}>
            <ListItemText primary={props.name} />
          </ListItemButton>
          {props.disabledBin && (
            <IconButton
              color="inherit"
              component={Link}
              to={`${props.id}?mode=delete`}
            >
              <Badge color="secondary">
                <DeleteIcon />
              </Badge>
            </IconButton>
          )}
        </ListItem>
      </List>
    </nav>
  );
}
