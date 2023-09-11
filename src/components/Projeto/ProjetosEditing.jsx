import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  DateField,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { Form, useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Link } from "react-router-dom";

export default function ProjetosEditing() {
  const loaderData = useLoaderData();

  const projectDeadline = dayjs(`${loaderData.projectDeadline}`);
  let projectBeginning = null;
  if (loaderData.projectBeginning) {
    projectBeginning = dayjs(`${loaderData.projectBeginning}`);
  }
  return (
    <Box>
      <Box component="div" sx={{ mt: "4rem" }}>
        <Form method="patch">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="projectName"
                label="Nome do Projeto"
                name="projectName"
                autoComplete="project-Name"
                autoFocus
                color="secondary"
                defaultValue={loaderData.projectName}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="project-Description"
                name="projectDescription"
                required
                fullWidth
                id="projectDescription"
                label="Descrição do Projeto"
                color="secondary"
                defaultValue={loaderData.projectDescription}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DateField
                    sx={{ margin: "10px" }}
                    format="DD/MM/YYYY"
                    color="secondary"
                    label="Data de início"
                    name="projectBeginning"
                    defaultValue={projectBeginning}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DateField
                    format="DD/MM/YYYY"
                    color="secondary"
                    label="Prazo de entrega"
                    name="projectDeadLine"
                    defaultValue={projectDeadline}
                  />
                </DemoItem>
              </LocalizationProvider>
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
              Salvar
            </Button>
          </Box>
          <Box component="div">
            <Button variant="contained" component={Link} to="..">
              Voltar
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
