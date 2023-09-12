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

const columns = ["A Fazer", "Em Progresso", "Concluído"];

const TarefasKanban = () => {
  const payload = useSelector((state) => state.token);
  const permission = payload.permission;
  // console.log(projectsData);

  const isAuthorized = permission === "g" || permission === "a";
  return (
    <Container sx={{ pb: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Tarefas
      </Typography>
      {
        //   projectsData.statusCode !== 405 &&
        isAuthorized && (
          <Button variant="contained" component={Link} to="addProject">
            Criar Tarefa <AddIcon />
          </Button>
        )
      }
      <Grid container spacing={2} sx={{ mt: "1rem" }}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant="h6">A Fazer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant="h6">Em Progresso</Typography>
            <Card variant="outlined" style={{ marginBottom: "8px" }}>
              <CardContent>
                <Box>Teste</Box>
                <Box
                  component="div"
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginTop: "8px" }}
                    sx={{ fontSize: "10px", fontWeight: "bold" }}
                  >
                    A fazer
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginTop: "8px" }}
                    sx={{ fontSize: "10px", fontWeight: "bold" }}
                  >
                    Concluir
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Typography variant="h6">Concluído</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TarefasKanban;
