import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {} from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
// import ProjetosUsersList from "./ProjetosUsersList";
// import ProjectAddUser from "./ProjetosAddUser";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useSelector } from "react-redux";

export default function TarefasTarefa() {
  const loaderData = useRouteLoaderData("taskLoader");
  const loaderDataTask = loaderData.resDataTask;
  const loaderDataComment = loaderData.resDataComment;
  const routeLoaderData = useRouteLoaderData("root-tasks");
  const payload = useSelector((state) => state.token);
  const permission = payload.permission;

  const usuariosArray = routeLoaderData.usersResData;
  // console.log("usuariosArray", usuariosArray);

  // console.log("loaderData.projectBeginning");
  // console.log(loaderData);

  const createdAt = dayjs(`${loaderDataTask.created_At}`);
  const taskDeadline = dayjs(`${loaderDataTask.taskDeadline}`);
  // let projectBeginning = null;
  // // if (loaderData.projectBeginning) {
  // //   projectBeginning = dayjs(`${loaderData.projectBeginning}`);
  // // }
  // console.log("createdAt");
  // console.log(createdAt);
  // console.log("taskDeadline");
  // console.log(taskDeadline);
  // console.log("loaderData")
  // console.log(loaderData);;

  const isAuthorized = permission === "g" || permission === "a";
  return (
    <Box>
      <Box
        component="div"
        sx={{
          pt: "4rem",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "90vh",
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="h1" variant="h2" color="secondary">
            {loaderDataTask.taskName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h5">
            Projeto: {loaderDataTask.projeto.projectName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h6" color="error">
            Prioridade: {loaderDataTask.taskPriority}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h6">
            Status: {loaderDataTask.taskStatus}
          </Typography>
        </Box>
        {/* <Box component="div" sx={{ mt: "2rem" }}>
          <ProjectAddUser projectId={loaderData.id} />
          <Typography component="h1" variant="h6" color="black">
            Usuários do projeto
          </Typography>
        </Box> */}

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>

        <Box component="div">
          <Typography variant="h6">
            Responsável:
            {` ${loaderDataTask.usuario[0].userName} ${loaderDataTask.usuario[0].userLastName}`}
          </Typography>
          {/* <nav aria-label="main mailbox folders">
            <List
              sx={{ borderRadius: "5px", maxHeight: "250px", overflow: "auto" }}
            >
              {loaderData.usuario.map((usuario) => (
                <ProjetosUsersList key={usuario.id} user={usuario} />
              ))}
            </List>
          </nav> */}
        </Box>
        <Box
          component="div"
          display="flex"
          sx={{ m: "2rem 0", justifyContent: "space-evenly" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <DateField
                format="DD/MM/YYYY"
                color="secondary"
                label="Data de Criação"
                name="createdAt"
                defaultValue={createdAt}
                disabled
              />
            </DemoItem>
          </LocalizationProvider>
          {/* {projectBeginning && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DateField
                  format="DD/MM/YYYY"
                  color="secondary"
                  label="Data de Início"
                  name="projectBeginning"
                  defaultValue={projectBeginning}
                  disabled
                />
              </DemoItem>
            </LocalizationProvider>
          )} */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <DateField
                format="DD/MM/YYYY"
                color="secondary"
                label="Prazo de entrega"
                name="projectDeadLine"
                disabled
                defaultValue={taskDeadline}
              />
            </DemoItem>
          </LocalizationProvider>
        </Box>

        <Box
          component="div"
          sx={{ m: "10px 0", display: "flex", justifyContent: "space-between" }}
        >
          {isAuthorized && (
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="editing"
            >
              Editar
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="?isDone=true"
          >
            Concluir
          </Button>
        </Box>
        <Box
          component="div"
          sx={{ m: "10px 0", display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="contained" component={Link} to="..">
            Voltar
          </Button>
          {isAuthorized && (
            <Button
              variant="contained"
              color="error"
              component={Link}
              to="?mode=delete"
            >
              Excluir
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
