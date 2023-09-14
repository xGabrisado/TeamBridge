import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  DateField,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import moment from "moment/moment";
import { useState } from "react";
// import dayjs from "dayjs";

// let defaultValue = dayjs();
// defaultValue = defaultValue.format("DD/MM/YYYY");
const defaultValue = moment();

export default function TarefasCreate() {
  const routeLoaderData = useRouteLoaderData("root-tasks");

  const usuariosArray = routeLoaderData.usersResData;
  const projetosArray = routeLoaderData.projectsResData;
  const isNotDone = projetosArray.filter((projeto) => !projeto.isDone);
  //   const [age, setAge] = useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  return (
    <Box>
      <Box component="div" sx={{ mt: "4rem" }}>
        <Form method="post">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="taskName"
                label="Nome da Tarefa"
                name="taskName"
                autoComplete="task-Name"
                autoFocus
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth color="secondary" required>
                <InputLabel id="demo-simple-select-label">
                  Prioridade
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"Nao urgente"}
                  //   value={age}
                  label="taskPriority"
                  name="taskPriority"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Nao urgente"}>Não Urgente</MenuItem>
                  <MenuItem value={"Pouca urgencia"}>Pouca Urgência</MenuItem>
                  <MenuItem value={"Urgente"}>Urgente</MenuItem>
                  <MenuItem value={"Muita urgencia"}>Muita urgência</MenuItem>
                  <MenuItem value={"Emergencia"}>Emergência</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoItem>
                  <DateField
                    required
                    format="DD/MM/YYYY"
                    color="secondary"
                    label="Prazo de entrega"
                    name="taskDeadline"
                    defaultValue={defaultValue}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth color="secondary" required>
                <InputLabel id="demo-simple-select-label">
                  Usuario Responsável
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="id"
                  name="id"
                  //   onChange={handleChange}
                >
                  {usuariosArray.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {`${user.userName} ${user.userLastName} (${user.userEmail})`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth color="secondary" required>
                <InputLabel id="demo-simple-select-label">Projeto</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="projetoId"
                  name="projetoId"
                  //   onChange={handleChange}
                >
                  {isNotDone.map((project) => (
                    <MenuItem key={project.id} value={project.id}>
                      {`${project.projectName}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar
            </Button>
          </Box>
        </Form>
        <Box component="div">
          <Button variant="contained" component={Link} to="..">
            Voltar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
