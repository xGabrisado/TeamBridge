import { Box, Button, Typography } from "@mui/material";
// import { Preview, print } from "react-html2pdf";
import { html2pdf } from "html2pdf.js";
import ReactDOMServer from "react-dom/server";

// const printHandler = () => {
//   const printElement = ReactDOMServer.renderToString(pdfJSX());
//   // const printElement = pdfJSX();

//   html2pdf().from(printElement).save();
// };

export default function ProjetosRelatorio() {
  const ConverterTeste = () => {
    return (
      <>
        <Typography>JSX to PDF Convert Example</Typography>
        <Typography>Hello React</Typography>
      </>
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(ConverterTeste());

    html2pdf().from(printElement).save();
  };
  return (
    <Box sx={{ mt: "4rem" }}>
      <Button variant="contained" onClick={printHandler}>
        Teste
      </Button>
    </Box>
  );
}
