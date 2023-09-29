import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useFetcher, Link } from "react-router-dom";

export default function TarefasAddComment(props) {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" action="comentarioCreate">
      <Box sx={{ m: "5px 0" }}>
        <TextField
          id="outlined-multiline-flexible"
          name="comment"
          label="Comentário"
          color="secondary"
          multiline
          fullWidth
          variant="filled"
          maxRows={4}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "5px 0" }}>
        <Button type="submit" variant="contained" color="secondary">
          Enviar comentário
        </Button>
      </Box>
    </fetcher.Form>
  );
}
