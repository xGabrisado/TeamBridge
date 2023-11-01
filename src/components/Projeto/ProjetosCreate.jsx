import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  DateField,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Form, Link } from "react-router-dom";
import moment from "moment/moment";
// import dayjs from "dayjs";

// let defaultValue = dayjs();
// defaultValue = defaultValue.format("DD/MM/YYYY");
const defaultValue = moment();

export default function ProjetosCreate() {
  return (
    <Box>
      <Box component="div" sx={{ mt: "4rem" }}>
        <Form method="post">
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoItem>
                  <DateField
                    sx={{ margin: "10px" }}
                    format="DD/MM/YYYY"
                    color="secondary"
                    label="Data de início"
                    name="projectBeginning"
                    defaultValue={defaultValue}
                  />
                </DemoItem>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoItem>
                  <DateField
                    format="DD/MM/YYYY"
                    color="secondary"
                    label="Prazo de entrega"
                    name="projectDeadLine"
                    defaultValue={defaultValue}
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
              sx={{ mt: 3 }}
            >
              Criar
            </Button>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              component={Link}
              type="button"
              to=".."
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
            >
              Voltar
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
