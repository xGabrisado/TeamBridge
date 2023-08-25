import { Box, Button, Container, Typography } from "@mui/material";
import { Form, Link } from "react-router-dom";

const Principal = () => {
  return (
    <>
      <Box>
        <Container
          component="div"
          sx={{
            // bgcolor: "red"
            display: "flex",
            justifyContent: "center",
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
            Bem vindo ao TeamBridge, Usuario!
          </Typography>
        </Container>
        <Container
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50vh",
          }}
        >
          <Container
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              height: "4rem",
              // bgcolor: "blue",
            }}
          >
            <Button
              component={Link}
              to="/profile"
              color="primary"
              variant="contained"
              sx={{
                width: "45%",
                fontSize: "large",
                fontSizeAdjust: "medium",
                color: "#036897",
              }}
            >
              Perfil
            </Button>
            <Button
              component={Link}
              to="/company"
              color="primary"
              variant="contained"
              sx={{ width: "45%", fontSize: "large", color: "#036897" }}
            >
              Empresa
            </Button>
          </Container>
          <Container
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              height: "4rem",
              // bgcolor: "blue",
            }}
          >
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              sx={{ width: "45%", fontSize: "large", color: "#036897" }}
            >
              Projetos
            </Button>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              sx={{ width: "45%", fontSize: "large", color: "#036897" }}
            >
              Tarefas
            </Button>
          </Container>
          <Container
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              height: "4rem",
              // bgcolor: "blue",
            }}
          >
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              sx={{
                width: "45%",
                fontSize: "large",
                color: "#036897",
              }}
            >
              Notificações
            </Button>
            <Form
              style={{
                textDecoration: "none",
                width: "45%",
              }}
              action="/logout"
              method="post"
            >
              <Button
                type="submit"
                color="error"
                variant="contained"
                sx={{ width: "100%", fontSize: "large", height: "100%" }}
              >
                Logout
              </Button>
            </Form>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Principal;
