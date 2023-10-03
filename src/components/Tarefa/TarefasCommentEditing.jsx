import { Box, Button, Grid, TextField } from "@mui/material";
import { Form, Link, useLoaderData } from "react-router-dom";

export default function TarefasCommentEditing() {
  const loaderData = useLoaderData();
  const createdAt = loaderData.created_At;
  const updatedAt = loaderData.updated_At;

  const isEdited = createdAt.valueOf() !== updatedAt.valueOf();

  console.log(isEdited);

  //   console.log("createdAt", createdAt.valueOf());
  //   console.log("updatedAt", updatedAt);
  return (
    <Box>
      <Box component="div" sx={{ mt: "4rem" }}>
        <Form method="patch">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="commentText"
                label="Comentário"
                name="commentText"
                autoComplete="comment-Text"
                autoFocus
                color="secondary"
                defaultValue={loaderData.commentText}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            color="primary"
            variant="contained"
            component={Link}
            to=".."
            sx={{ m: "10px 0", mr: "10px" }}
          >
            Voltar
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ m: "10px 0" }}
          >
            Salvar
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
