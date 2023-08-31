import Box from "@mui/material/Box";
import { Link, useLoaderData } from "react-router-dom";
import ProjetosList from "./ProjetosList";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Projetos() {
  const projectsData = useLoaderData();
  // console.log(projectsData);

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
        <Button variant="contained" component={Link} to="addProject">
          Criar Projeto <AddIcon />
        </Button>
      </Box>
      {projectsData && (
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "10px",
          }}
        >
          {projectsData.map((projeto) => (
            <ProjetosList
              key={projeto.id}
              id={projeto.id}
              name={projeto.projectName}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
