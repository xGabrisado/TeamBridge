import { Box, Button } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import generatePDF, { Margin } from "react-to-pdf";
// import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
// import { useState } from "react";

const personalizacao = {
  // Baixar/Salvar = save / abrir no navegador = open
  method: "open",
  page: {
    // Definir margem: SMALL ou MEDIUM
    margin: Margin.MEDIUM,
    // default is 'A4'
    format: "A4",
    // default is 'portrait'
    orientation: "portrait",
  },
};

const recuperarConteudoParaPDF = () => document.getElementById("conteudo");

const columns = [
  { field: "id", headerName: "ID" },
  { field: "projectName", headerName: "Nome", width: 150 },
  // { field: "createdAt", headerName: "Criação", width: 70 },
  { field: "projectBeginning", headerName: "Inicio", width: 150 },
  {
    field: "projectDeadline",
    headerName: "Data de entrega",
    width: 150,
  },
  {
    field: "isDone",
    headerName: "Concluído",
    width: 140,
  },
  {
    field: "isLate",
    headerName: "Atrasado",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// const transformDate = (data) => {
//   const data = new Date(data);

//   const dia = data.getDate().toString().padStart(2, "0"); // Obter o dia
//   const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Obter o mês (adicionar 1 porque os meses são indexados de 0 a 11)
//   const ano = data.getFullYear(); // Obter o ano

//   const dataFormatada = `${dia}/${mes}/${ano}`;
//   return dataFormatada;
// };

const isLate = (project) => {
  const atual = new Date();
  const isLate = project.isDone
    ? project.done_at > project.projectDeadline
      ? "Atrasado"
      : "Feito à tempo"
    : atual > project.rojectDeadline
    ? "Atrasado"
    : "Está em tempo";
  return isLate;
};

export default function ProjetosRelatorios() {
  // const [donesList, setDonesList] = useState();
  const loaderData = useLoaderData();
  console.log("loaderData", loaderData);
  const rows = loaderData.map((project) => {
    return {
      id: project.id,
      projectName: project.projectName,
      projectBeginning: new Date(project.projectBeginning).toLocaleDateString(
        "pt-BR"
      ),
      projectDeadline: new Date(project.projectDeadline).toLocaleDateString(
        "pt-BR"
      ),
      isDone: project.isDone ? "Sim" : "Não",
      isLate: isLate(project),
    };
  });

  return (
    <>
      <Box sx={{ mt: "4rem" }}>
        <Button
          variant="contained"
          onClick={() => generatePDF(recuperarConteudoParaPDF, personalizacao)}
          sx={{ mr: "2rem" }}
        >
          Gerar PDF
        </Button>
        <Button variant="contained" component={Link} to=".." color="secondary">
          Voltar
        </Button>
        <Box id="conteudo" sx={{ mt: "1rem" }}>
          <div style={{ height: 400, width: "100%", background: "white" }}>
            <DataGrid
              sx={{ width: "100%", mr: "2rem" }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              // checkboxSelection
            />
          </div>
        </Box>
      </Box>
    </>
  );
}
