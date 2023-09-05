import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, redirect, useParams, useSubmit } from "react-router-dom";
import { getAuthToken } from "../../utils/auth";
import { useState } from "react";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import InboxIcon from "@mui/icons-material/Inbox";

export default function ProjetosUsersList({ user }) {
  const params = useParams();
  const submit = useSubmit();

  const deleteUserFromProjectHandler = async () => {
    const token = getAuthToken();
    if (!token) {
      return redirect("/");
    }
    const id = user.id;

    let formData = new FormData();
    formData.append("userId", `${id}`);
    formData.append("projectId", `${params.id}`);
    submit(formData, {
      method: "PATCH",
      action: "/projects/removeUserFromProject",
    });
  };
  // console.log(props);
  return (
    <ListItem disablePadding sx={{ bgcolor: "white", p: "0 20px" }}>
      <ListItemText primary={`${user.userName} ${user.userLastName}`} />
      <IconButton color="inherit" onClick={deleteUserFromProjectHandler}>
        <Badge color="secondary">
          <DeleteIcon />
        </Badge>
      </IconButton>
    </ListItem>
  );
}
