import { getAuthToken } from "../utils/auth";
import Empresa from "../components/Empresa";
import { json, redirect } from "react-router-dom";
import { getTokenId } from "../helpers/functions.helper";

export default function CompanyPage() {
  return <Empresa />;
}

export async function loader({ request }) {
  const id = getTokenId();
  const token = getAuthToken();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || null;

  if (!token) {
    return redirect("/");
  }

  if (mode === "exit") {
    const response = await fetch(
      "http://localhost:3000/usuario/saindoEmpresa",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: id,
        }),
      }
    );

    if (!response.ok) {
      throw json(
        { message: "Não foi possível enviar para o banco" },
        { status: 500 }
      );
    }

    // if (mode === "delete") {
    //   const response = await fetch(
    //     "http://localhost:3000/usuario/saindoEmpresa",
    //     {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({
    //         userId: id,
    //       }),
    //     }
    //   );

    if (!response.ok) {
      throw json(
        { message: "Não foi possível enviar para o banco" },
        { status: 500 }
      );
    }

    const resData = await response.json();

    return redirect("/");
  }

  const response = await fetch(
    "http://localhost:3000/usuario/empresa/" + `${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const resData = await response.json();

  // const loaderData = {
  //   nome: resData.userName,
  //   sobrenome: resData.userLastName,
  //   cargo: resData.userPost,
  //   permission: resData.userPermission,
  //   email: resData.userEmail,
  // };

  if (resData.empresa) {
    const empresaId = resData.empresa;
    const response = await fetch(
      "http://localhost:3000/empresa/" + `${empresaId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw json(
        { message: "Não foi possível enviar para o banco" },
        { status: 500 }
      );
    }

    const responseEmpresa = await response.json();
    // console.log(responseEmpresa);

    return responseEmpresa;
    // const empresa = {
    //   razaoSocial: resData.razaoSocial,
    //   nomeFantasia: resData.nomeFantasia,
    //   cpfCnpj: resData.cpfCnpj,
    // };

    //   return empresa;
  }

  return false;
}

export async function action({ request }) {
  const token = getAuthToken();
  const data = await request.formData();
  const creatingEmpresa = {
    razaoSocial: data.get("razaoSocial"),
    nomeFantasia: data.get("nomeFantasia"),
    cpfCnpj: data.get("cpfCnpj"),
  };
  // console.log(creatingEmpresa);

  const response = await fetch("http://localhost:3000/empresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(creatingEmpresa),
  });

  // console.log("response.status");
  // console.log(response.status);
  // console.log("response.message");
  // console.log(response.message);

  if (response.status === 409) {
    return response;
    // throw json(
    //   { message: "Conflito de CPF/CNPJ ou de Razão Social" },
    //   { status: 409 }
    // );
  }

  if (response.status === 406) {
    return response;
    // throw json(
    //   {
    //     message: "Por favor, inserir no formato correto de CPF ou CNPJ",
    //   },
    //   { status: 406 }
    // );
  }

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not autheticate user." }, { status: 500 });
    // throw json(
    //   { message: "Impossível se conectar com o banco" },
    //   { status: 500 }
    // );
  }

  const resData = await response.json();
  // console.log(resData);

  return redirect("/company");
}
