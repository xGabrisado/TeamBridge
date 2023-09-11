import dayjs from "dayjs";
import ProjetosCreate from "../components/Projeto/ProjetosCreate";
import { getAuthToken } from "../utils/auth";
import moment from "moment";
import { redirect } from "react-router-dom";

export default function ProjectsCreatePage() {
  return <ProjetosCreate />;
}

export async function action({ request }) {
  const token = getAuthToken();
  const data = await request.formData();
  // console.log(data.get("projectName"));
  // console.log(data.get("projectDescription"));
  // console.log(data.get("projectDeadLine"));
  let splitDate = data.get("projectDeadLine").split("/");
  let splitBeginningDate = data.get("projectBeginning").split("/");
  const concatDate = splitDate[2].concat(`-${splitDate[0]}-${splitDate[1]}`);
  const concatBeginningDate = splitBeginningDate[2].concat(
    `-${splitBeginningDate[0]}-${splitBeginningDate[1]}`
  );
  // console.log(concatDate);
  console.log("projectBeginning");
  console.log(concatBeginningDate);

  const projectData = {
    projectName: data.get("projectName"),
    projectDescription: data.get("projectDescription"),
    projectBeginning: concatBeginningDate,
    projectDeadline: concatDate,
  };
  // console.log(JSON.stringify(projectData));

  const response = await fetch("http://localhost:3000/projeto", {
    method: "POST",
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

  console.log(resData);

  return redirect("/projects");
}
