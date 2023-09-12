import Box from "@mui/material/Box";
import { Link, useLoaderData } from "react-router-dom";
import ProjetosList from "./ProjetosList";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

export default function Projetos() {
  const projectsData = useLoaderData();
  const payload = useSelector((state) => state.token);
  const permission = payload.permission;
  // console.log(projectsData);

  const isAuthorized = permission === "g" || permission === "a";
  const isNotDone = projectsData.filter((projeto) => !projeto.isDone);
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
        {projectsData.statusCode !== 405 && isAuthorized && (
          <Button variant="contained" component={Link} to="addProject">
            Criar Projeto <AddIcon />
          </Button>
        )}
      </Box>
      {projectsData.statusCode === 405 && (
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
            Aqui aparecem os projetos de sua empresa atual, entre em uma para
            criar novos.
          </Typography>
        </Box>
      )}
      {projectsData && projectsData.statusCode !== 405 && (
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "10px",
            p: "0 20px",
          }}
        >
          {isNotDone.map((projeto) => (
            <ProjetosList
              key={projeto.id}
              id={projeto.id}
              name={projeto.projectName}
              disabledBin={isAuthorized}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
