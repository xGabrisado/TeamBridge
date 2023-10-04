import { Box, Button, Typography } from "@mui/material";
import { Link, useRouteLoaderData } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import TarefasConcluidasList from "./TarefasConcluidasList";
import { useSelector } from "react-redux";

export default function TarefasConcluidas() {
  const loaderData = useRouteLoaderData("root-tasks");
  const payload = useSelector((state) => state.token);
  const permission = payload.permission;
  //   console.log(loaderData.tasksResData);

  const isAuthorized = permission === "g" || permission === "a";
  //   console.log(loaderData.tasksResData);

  const isDone = loaderData.tasksResData.message
    ? null
    : loaderData.tasksResData.filter((projeto) => projeto.isDone);

  //   console.log("isDone", isDone);
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
      >
        <Typography variant="h4">Tarefas concluidas</Typography>
      </Box>
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
            Aqui aparecem as tarefas de sua empresa atual, entre em uma para
            criar novos.
          </Typography>
        </Box>
      )}
      {loaderData.tasksResData &&
        loaderData.tasksResData.statusCode !== 405 && (
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              borderRadius: "10px",
              p: "0 20px",
            }}
          >
            {isDone.map((tarefa) => (
              <TarefasConcluidasList
                key={tarefa.id}
                id={tarefa.id}
                name={tarefa.taskName}
                // disabledBin={isAuthorized}
              />
            ))}
          </Box>
        )}
    </Box>
  );
}
