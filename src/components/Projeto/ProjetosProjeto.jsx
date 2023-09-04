import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProjetosUsersList from "./ProjetosUsersList";
import ProjectAddUser from "./ProjetosAddUser";

export default function ProjetosProjeto() {
  const loaderData = useLoaderData();
  const [isEditing, setIsEditing] = useState(false);
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
        <Box component="div">
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
            <List sx={{ borderRadius: "5px" }}>
              {loaderData.usuario.map((usuario) => (
                <ProjetosUsersList key={usuario.id} user={usuario} />
              ))}
            </List>
          </nav>
        </Box>
      </Box>
    </Box>
  );
}
