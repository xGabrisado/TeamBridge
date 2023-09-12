import { Container, Paper, Typography } from "@mui/material";
import TarefasKanban from "./TarefasKanban";

export default function Tarefas() {
  return (
    <Container sx={{ mt: "4rem" }}>
      {/* <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography> */}
      <Paper elevation={3}>
        <TarefasKanban />
      </Paper>
    </Container>
  );
}
