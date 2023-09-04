import { Box, Button, Typography } from "@mui/material";
import { useRouteLoaderData, Link } from "react-router-dom";

export default function TokenCreation() {
  const companyToken = useRouteLoaderData("CompanyToken");
  return (
    <>
      <Box>
        <Box
          component="div"
          sx={{
            // bgcolor: "red"
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: "4rem",
              mb: "1em",
              bgcolor: "#D1EDF1",
              padding: "1rem",
              borderRadius: "10px",
              border: "solid 1px",
              width: "100%",
            }}
          >
            Copie a chave de acesso abaixo e passe para o colaborador.
          </Typography>
          <Typography
            component="textarea"
            variant="h5"
            sx={{
              mt: "1rem",
              mb: "1em",
              color: "black",
              bgcolor: "#D1EDF1",
              padding: "1rem",
              borderRadius: "10px",
              border: "solid 1px",
              width: "100%",
              height: "15vh",
            }}
          >
            {companyToken}
          </Typography>
          <Link to="/company">
            <Button variant="contained">Voltar</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
