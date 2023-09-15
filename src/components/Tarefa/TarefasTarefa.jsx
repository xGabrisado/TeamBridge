import { Box, Typography, Button } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
// import ProjetosUsersList from "./ProjetosUsersList";
// import ProjectAddUser from "./ProjetosAddUser";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

export default function TarefasTarefa() {
  const loaderData = useRouteLoaderData("taskLoader");
  const routeLoaderData = useRouteLoaderData("root-tasks");

  const usuariosArray = routeLoaderData.usersResData;
  console.log("usuariosArray", usuariosArray);

  // console.log("loaderData.projectBeginning");
  console.log(loaderData);

  const createdAt = dayjs(`${loaderData.created_At}`);
  const taskDeadline = dayjs(`${loaderData.taskDeadline}`);
  // let projectBeginning = null;
  // // if (loaderData.projectBeginning) {
  // //   projectBeginning = dayjs(`${loaderData.projectBeginning}`);
  // // }
  // console.log("createdAt");
  // console.log(createdAt);
  // console.log("taskDeadline");
  // console.log(taskDeadline);
  console.log("loaderData");
  console.log(loaderData);

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
            {loaderData.taskName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h5" color="error">
            Projeto: {loaderData.projeto.projectName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h6" color="error">
            Prioridade: {loaderData.taskPriority}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h6">
            Status: {loaderData.taskStatus}
          </Typography>
        </Box>
        {/* <Box component="div" sx={{ mt: "2rem" }}>
          <ProjectAddUser projectId={loaderData.id} />
          <Typography component="h1" variant="h6" color="black">
            Usuários do projeto
          </Typography>
        </Box> */}

        <Box component="div">
          <Typography variant="h6">
            Responsável:
            {` ${loaderData.usuario[0].userName} ${loaderData.usuario[0].userLastName}`}
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
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="editing"
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="editing/?done=true"
          >
            Concluir
          </Button>
        </Box>
        <Box component="div">
          <Button variant="contained" component={Link} to="..">
            Voltar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
