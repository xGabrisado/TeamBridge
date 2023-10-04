import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TarefasKanbanCard from "./TarefasKanbanCard";

const columns = ["A Fazer", "Em Progresso", "Concluído"];

const TarefasKanban = (props) => {
  const payload = useSelector((state) => state.token);
  const permission = payload.permission;
  const isNotDone = props.loaderData.message
    ? null
    : props.loaderData.filter((projeto) => !projeto.isDone);
  // console.log(isNotDone);

  // console.log(props.loaderData);
  const aFazer = isNotDone
    ? isNotDone.filter((task) => task.taskStatus === "A fazer")
    : null;
  const emProgresso = isNotDone
    ? isNotDone.filter((task) => task.taskStatus === "Em progresso")
    : null;
  const concluido = isNotDone
    ? isNotDone.filter((task) => task.taskStatus === "Concluido")
    : null;

  // console.log(aFazer);
  // console.log(emProgresso);
  // console.log(concluido);

  const isAuthorized = permission === "g" || permission === "a";
  return (
    <Container sx={{ pb: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Tarefas
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {
          //   projectsData.statusCode !== 405 &&
          isAuthorized && (
            <Button variant="contained" component={Link} to="addTasks">
              Criar Tarefa <AddIcon />
            </Button>
          )
        }
        <Button component={Link} to="done" variant="contained">
          Tarefas Concluídas
        </Button>
      </Box>

      {!props.existsTasks && (
        <Typography variant="h6" sx={{ mt: "1rem" }}>
          {isAuthorized
            ? "Sua equipe ainda não possui tarefas, crie uma"
            : "Você ainda não possui tarefas atribuidas"}
        </Typography>
      )}
      {props.existsTasks && (
        <Grid container spacing={2} sx={{ mt: "1rem" }}>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Typography variant="h6">A Fazer</Typography>
              {aFazer &&
                aFazer.length !== 0 &&
                aFazer.map((task) => (
                  <TarefasKanbanCard
                    key={task.id}
                    name={task.taskName}
                    id={task.id}
                    buttonTo1="Em progresso"
                  />
                ))}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Typography variant="h6">Em Progresso</Typography>
              {emProgresso &&
                emProgresso.length !== 0 &&
                emProgresso.map((task) => (
                  <TarefasKanbanCard
                    key={task.id}
                    name={task.taskName}
                    id={task.id}
                    buttonTo1="A fazer"
                    buttonTo2="Concluido"
                  />
                ))}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Typography variant="h6">Concluído</Typography>
              {concluido &&
                concluido.length !== 0 &&
                concluido.map((task) => (
                  <TarefasKanbanCard
                    key={task.id}
                    name={task.taskName}
                    id={task.id}
                    buttonTo1="Em progresso"
                    buttonTo3="Concluir"
                  />
                ))}
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default TarefasKanban;
