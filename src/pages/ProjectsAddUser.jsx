import { redirect } from "react-router-dom";
import ProjetosAddUser from "../components/Projeto/ProjetosAddUser";
import { getAuthToken } from "../utils/auth";

export default function ProjectsAddUserPage() {
  return <ProjetosAddUser />;
}

export async function action({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const projectId = params.id;
  const data = await request.formData();
  const emailData = {
    userEmail: data.get("email").toLowerCase(),
  };
  //   const projectId = data.get("projectId");

  const response = await fetch(
    "http://localhost:3000/projeto/addUser/" + projectId,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(emailData),
    }
  );

  if (!response.ok) {
    console.log("deu erro");
    console.log(response);
    return { message: "Email inválido" };
  }

  const resData = await response.json();

  console.log(resData);
  // send to backend newsletter server ...

  return { message: "Adicionado com sucesso!" };
}
