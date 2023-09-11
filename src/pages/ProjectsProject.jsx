import ProjetosProjeto from "../components/Projeto/ProjetosProjeto";
import { getAuthToken } from "../utils/auth";
import { json, redirect } from "react-router-dom";

export default function ProjectsProjectPage() {
  return <ProjetosProjeto />;
}

export async function loader({ request, params }) {
  // console.log(params);
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || null;

  if (mode === "delete") {
    const rusure = window.confirm(
      "Não haverá como recuperar os dados do projeto, tem certeza?"
    );

    if (rusure) {
      const response = await fetch(
        "http://localhost:3000/projeto/" + params.id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === "405") {
        return response;
      }

      if (!response.ok) {
        if (!response.ok) {
          throw json({ message: "Could not fetch data" }, { status: 500 });
        }
      }

      const resData = await response.json();

      return redirect("/projects");
    }

    return redirect("/projects");
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
