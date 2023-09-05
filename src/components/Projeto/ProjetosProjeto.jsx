import { Box, Typography, Button } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProjetosUsersList from "./ProjetosUsersList";
import ProjectAddUser from "./ProjetosAddUser";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

export default function ProjetosProjeto() {
  const loaderData = useLoaderData();
  const [isEditing, setIsEditing] = useState(false);

  const createdAt = dayjs(`${loaderData.created_At}`);
  const projectDeadline = dayjs(`${loaderData.projectDeadline}`);
  console.log("createdAt");
  console.log(createdAt);
  console.log("projectDeadline");
  console.log(projectDeadline);
  // console.log("loaderData");
  // console.log(loaderData);

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
            {loaderData.projectName}
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="h1" variant="h6" color="secondary">
            {loaderData.projectDescription}
          </Typography>
        </Box>
        <Box component="div" sx={{ mt: "2rem" }}>
          <ProjectAddUser projectId={loaderData.id} />
          <Typography component="h1" variant="h6" color="black">
            Usuários do projeto
          </Typography>
        </Box>

        <Box component="div">
          <nav aria-label="main mailbox folders">
            <List
              sx={{ borderRadius: "5px", maxHeight: "250px", overflow: "auto" }}
            >
              {loaderData.usuario.map((usuario) => (
                <ProjetosUsersList key={usuario.id} user={usuario} />
              ))}
            </List>
          </nav>
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <DateField
                format="DD/MM/YYYY"
                color="secondary"
                label="Prazo de entrega"
                name="projectDeadLine"
                disabled
                defaultValue={projectDeadline}
              />
            </DemoItem>
          </LocalizationProvider>
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
