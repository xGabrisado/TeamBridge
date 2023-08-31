import { redirect } from "react-router-dom";
import Projetos from "../components/Projeto/Projetos";
import { getAuthToken } from "../utils/auth";

export default function ProjectsPage() {
  return (
    <>
      <Projetos />
    </>
  );
}

export async function loader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const response = await fetch("http://localhost:3000/projeto", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const resData = await response.json();

  // console.log(resData);

  return resData;
}
