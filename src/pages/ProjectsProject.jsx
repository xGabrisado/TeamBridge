import ProjetosProjeto from "../components/Projeto/ProjetosProjeto";
import { getAuthToken } from "../utils/auth";
import { json, redirect } from "react-router-dom";

export default function ProjectsProjectPage() {
  return <ProjetosProjeto />;
}

export async function loader({ params }) {
  // console.log(params);
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const response = await fetch("http://localhost:3000/projeto/" + params.id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === "405") {
    return response;
  }

  if (!response.ok) {
    if (!response.ok) {
      throw json({ message: "Could not fetch data" }, { status: 500 });
    }
  }

  const resData = await response.json();
  // console.log(resData);
  return resData;
}
