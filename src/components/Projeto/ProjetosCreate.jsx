import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  DateField,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Form } from "react-router-dom";
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
              {/* <Typography component="p" variant="body1" color="secondary">
                Formatos disponiveis CPF: 999.999.999-99 ou CNPJ:
                99.999.999/9999-99
              </Typography> */}
              <TextField
                required
                fullWidth
                id="projectName"
                label="Nome do Projeto"
                name="projectName"
                autoComplete="project-Name"
                autoFocus
                // defaultValue={email}
                // disabled={!isEditing}
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
                // defaultValue={nome}
                // disabled={!isEditing}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                required
                fullWidth
                id="nomeFantasia"
                label="Nome Fantasia"
                name="nomeFantasia"
                autoComplete="nome-fantasia" */}
              {/* defaultValue={sobrenome} */}
              {/* disabled={!isEditing} */}
              {/* color="secondary"
              /> */}
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoItem>
                  <DateField
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
              sx={{ mt: 3, mb: 2 }}
            >
              Criar
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
