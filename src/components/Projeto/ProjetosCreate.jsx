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
import { useState } from "react";
// import dayjs from "dayjs";

// let defaultValue = dayjs();
// defaultValue = defaultValue.format("DD/MM/YYYY");
// const [startDate, setStartDate] = useState(defaultValue);
// const [endDate, setEndDate] = useState(defaultValue);
const defaultValue = moment();

export default function ProjetosCreate() {
  const [startDate, setStartDate] = useState(defaultValue);
  const [endDate, setEndDate] = useState(defaultValue);
  const [error, setError] = useState("");
  console.log("startDate", startDate);
  console.log("endDate", endDate);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);

    if (startDate && date < startDate) {
      setError("A data de entrega deve ser maior que a data de início.");
    } else {
      setError("");
    }
  };

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
                    value={startDate}
                    onChange={handleStartDateChange}
                    // defaultValue={defaultValue}
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
                    value={endDate}
                    onChange={handleEndDateChange}
                    // defaultValue={defaultValue}
                  />
                </DemoItem>
              </LocalizationProvider>
              {error && <div style={{ color: "red" }}>{error}</div>}
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
              style={{
                display: error ? "none" : "block",
              }}
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
