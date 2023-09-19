import ProjetosEditing from "../components/Projeto/ProjetosEditing";
import { getAuthToken } from "../utils/auth";
import { json, redirect } from "react-router-dom";

export default function ProjectsEditingPage() {
  return <ProjetosEditing />;
}

export async function loader({ request, params }) {
  // console.log(params);
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const searchParams = new URL(request.url).searchParams;
  const done = searchParams.get("done") || null;

  if (done === "true") {
    const rusure = window.confirm(
      "Depois de concluir um projeto, não tem como alterar mais, tem certeza?"
    );

    if (rusure) {
      const response = await fetch(
        "http://localhost:3000/projeto/done/" + params.id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 404) {
        return response;
      }

      if (!response.ok) {
        console.log("deu erro");
        console.log(response);
        return redirect("/projects");
      }

      window.alert("Concluido com sucesso!");

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

export async function action({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const data = await request.formData();
  // console.log(data.get("projectName"));
  // console.log(data.get("projectDescription"));
  // console.log(data.get("projectDeadLine"));
  let splitDate = data.get("projectDeadLine").split("/");
  let splitBeginningDate = data.get("projectBeginning").split("/");
  let concatBeginningDate = null;
  if (splitBeginningDate) {
    concatBeginningDate = splitBeginningDate[2].concat(
      `-${splitBeginningDate[1]}-${splitBeginningDate[0]}`
    );
  }
  const concatDate = splitDate[2].concat(`-${splitDate[1]}-${splitDate[0]}`);
  // console.log(concatDate);
  // console.log("projectBeginning");
  // console.log(concatBeginningDate);

  const projectData = {
    projectName: data.get("projectName"),
    projectDescription: data.get("projectDescription"),
    projectBeginning: concatBeginningDate,
    projectDeadline: concatDate,
  };
  // console.log("JSON.stringify(projectData)");
  // console.log(JSON.stringify(projectData));

  // console.log(projectData);

  // console.log("params.id");
  // console.log(params.id);

  // return redirect("/projects");

  const response = await fetch("http://localhost:3000/projeto/" + params.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    console.log("deu erro");
    console.log(response);
    return redirect("/projects");
  }

  const resData = await response.json();

  // console.log(resData);

  return redirect("/projects");
}
