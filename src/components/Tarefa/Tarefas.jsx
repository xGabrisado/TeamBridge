import { Box, Paper, Typography } from "@mui/material";
import TarefasKanban from "./TarefasKanban";
import { useRouteLoaderData } from "react-router-dom";

export default function Tarefas() {
  const loaderData = useRouteLoaderData("root-tasks");

  // console.log("loaderData");
  // console.log(loaderData);
  const existsTasks = loaderData.tasksResData.length !== 0;
  return (
    <Box>
      <Box
        component="div"
        sx={{
          // bgcolor: "red"
          display: "flex",
          justifyContent: "flex-start",
          // flexDirection: "row",
          mt: "4rem",
          mb: "1rem",
        }}
      ></Box>
      {/* <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography> */}
      {loaderData.tasksResData.statusCode === 405 && (
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            sx={{
              mb: "1em",
              bgcolor: "#D1EDF1",
              padding: "1rem",
              borderRadius: "10px",
              border: "solid 1px",
              width: "100%",
            }}
          >
            Aqui aparecem as tarefas de sua empresa atual, entre em uma e crie
            projetos para criar novas.
          </Typography>
        </Box>
      )}
      {loaderData.tasksResData &&
        loaderData.tasksResData.statusCode !== 405 && (
          <Paper elevation={3}>
            <TarefasKanban
              existsTasks={existsTasks}
              loaderData={loaderData.tasksResData}
            />
          </Paper>
        )}
    </Box>
  );
}
