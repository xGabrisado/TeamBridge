import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useFetcher, Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

export default function ProjetosAddUser(props) {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" action="addUserToProject">
      {/* <TextField
        type="hidden"
        name="projectId"
        defaultValue={props.projectId}
        sx={{ border: "none", margin: "none" }}
        variant="standard"
      /> */}
      <TextField
        type="email"
        name="email"
        placeholder="Email do usuário..."
        aria-label="Email do usuário"
        color="secondary"
        size="small"
        sx={{ pr: "1rem" }}
      />
      <Button variant="contained" type="submit">
        Adicionar usuário
        <AddIcon />
      </Button>
    </fetcher.Form>
  );
}
