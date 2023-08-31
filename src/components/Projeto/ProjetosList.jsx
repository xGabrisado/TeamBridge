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
        <Link to={`${props.id}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={props.name} />
            </ListItemButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <DeleteIcon />
              </Badge>
            </IconButton>
          </ListItem>
        </Link>
      </List>
    </nav>
  );
}
