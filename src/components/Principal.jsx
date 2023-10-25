import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Link, useLoaderData } from "react-router-dom";
import { getAuthToken, getTokenDuration } from "../utils/auth";
import {
  getTokenEmail,
  getTokenId,
  getTokenPermission,
} from "../helpers/functions.helper";
import { tokenActions } from "../store/tokenPayload";

const Principal = () => {
  const dispatch = useDispatch();
  // const loaderData = useLoaderData();

  // const notifications = loaderData.filter(
  //   (notification) => notification.isOpen === false
  // );
  // console.log("notifications.length", notifications.length);

  useEffect(() => {
    const token = getAuthToken();

    if (!token) {
      return;
    }
    const id = getTokenId();
    const userEmail = getTokenEmail();
    const userPermission = getTokenPermission();

    // console.log("userEmail useEffect");
    // console.log(userEmail);

    dispatch(
      tokenActions.addTokenPayload({
        id,
        userEmail,
        userPermission,
      })
    );
  }, [dispatch]);
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
              to="/projects"
              color="primary"
              variant="contained"
              sx={{ width: "45%", fontSize: "large", color: "#036897" }}
            >
              Projetos
            </Button>
            <Button
              component={Link}
              to="/tasks"
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
              to="/notificacoes"
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
