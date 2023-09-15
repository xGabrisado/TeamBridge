import { Container, Paper, Typography } from "@mui/material";
import TarefasKanban from "./TarefasKanban";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export default function Tarefas() {
  const loaderData = useRouteLoaderData("root-tasks");

  // console.log("loaderData");
  // console.log(loaderData);
  const existsTasks = loaderData.tasksResData.length !== 0;
  return (
    <Container sx={{ mt: "4rem" }}>
      {/* <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography> */}
      <Paper elevation={3}>
        <TarefasKanban
          existsTasks={existsTasks}
          loaderData={loaderData.tasksResData}
        />
      </Paper>
    </Container>
  );
}
