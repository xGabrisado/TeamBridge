import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import {
  getTokenEmail,
  getTokenId,
  getTokenPermission,
} from "../helpers/functions.helper";
import { tokenActions } from "../store/tokenPayload";

const Empresa = () => {
  const [isCreatingCompany, setIsCreatingCompany] = useState(false);
  const [isEnteringCompany, setIsEnteringCompany] = useState(false);
  const loaderData = useLoaderData();
  const actionData = useActionData();

  const payload = useSelector((state) => state.token);
  const permission = payload.permission;

  const openCreateCompanyHandler = () => {
    setIsCreatingCompany((prevState) => !prevState);
    setIsEnteringCompany(false);
  };
  const openEnterCompanyHandler = () => {
    setIsEnteringCompany((prevState) => !prevState);
    setIsCreatingCompany(false);
  };

  const isAutorized = permission === "g" || permission === "a";
  return (
    <>
      <Box>
        <Box
          component="div"
          sx={{
            // bgcolor: "red"
            display: "flex",
            justifyContent: "flex-start",
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
            {loaderData
              ? `Você está na empresa: 
              ${loaderData.nomeFantasia}!`
              : "Você não possui empresa cadastrada, se cadastre ou entre em alguma!"}
          </Typography>
        </Box>
        {!loaderData && (
          <Box
            component="div"
            sx={{
              // bgcolor: "red"
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              type="button"
              onClick={openCreateCompanyHandler}
              color="secondary"
            >
              Criar Empresa
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={openEnterCompanyHandler}
              sx={{ justifySelf: "flex-end" }}
            >
              Entrar em uma empresa
            </Button>
          </Box>
        )}
        {!loaderData && isCreatingCompany && (
          <Box component="div" noValidate sx={{ mt: 3 }}>
            <Form method="post">
              <Grid container spacing={2}>
                {/* {actionData?.error && (
                  <ul>
                    {Object.values(actionData.errors).map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                )} */}
                {actionData?.message && (
                  <Grid item xs={12} sm={12}>
                    <Typography color="error">{actionData?.message}</Typography>
                  </Grid>
                )}
                <Grid item xs={12} sm={12}>
                  <Typography component="p" variant="body1" color="secondary">
                    Formatos disponiveis CPF: 999.999.999-99 ou CNPJ:
                    99.999.999/9999-99
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    id="cpfCnpj"
                    label="CPF/CNPJ"
                    name="cpfCnpj"
                    autoComplete="cpfCnpj"
                    // defaultValue={email}
                    // disabled={!isEditing}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <TextField
                    autoComplete="razao-social"
                    name="razaoSocial"
                    required
                    fullWidth
                    id="razaoSocial"
                    label="Razão Social"
                    autoFocus
                    // defaultValue={nome}
                    // disabled={!isEditing}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="nomeFantasia"
                    label="Nome Fantasia"
                    name="nomeFantasia"
                    autoComplete="nome-fantasia"
                    // defaultValue={sobrenome}
                    // disabled={!isEditing}
                    color="secondary"
                  />
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
        )}
        {!loaderData && isEnteringCompany && (
          <Box component="div" noValidate sx={{ mt: 3 }}>
            <Form method="post" action="/enterCompany">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography>
                    Para conseguir uma chave de acesso peça ao gerente da
                    empresa
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="token"
                    label="Chave de acesso"
                    name="companyToken"
                    autoComplete="CompanyToken"
                    // defaultValue={email}
                    // disabled={!isEditing}
                    color="secondary"
                  />
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
                  Enviar
                </Button>
              </Box>
            </Form>
          </Box>
        )}
        {loaderData && (
          <>
            <Box
              component="div"
              noValidate
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {isAutorized && (
                <Link to="/createToken">
                  <Button variant="contained">
                    Criar Chave para um colaborador
                  </Button>
                </Link>
              )}
              <Link to={`?mode=exit`}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#ab2121", color: "white" }}
                >
                  Sair da empresa
                </Button>
              </Link>
            </Box>
            {/* {isAutorized && (
              <Box
                component="div"
                noValidate
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={`?mode=delete`}
                  color="error"
                  sx={{
                    ":hover": { color: "black" },
                  }}
                >
                  Deletar a empresa
                </Button>
              </Box>
            )} */}
          </>
        )}
      </Box>
    </>
  );
};

export default Empresa;
