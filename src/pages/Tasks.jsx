import Tarefas from "../components/Tarefa/Tarefas";
import { getAuthToken } from "../utils/auth";
import { redirect } from "react-router-dom";

export default function TasksPage() {
  return <Tarefas />;
}

export async function loader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const tasksResponse = await fetch("http://localhost:3000/tarefa", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const usersResponse = await fetch("http://localhost:3000/usuario", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const projectsResponse = await fetch("http://localhost:3000/projeto", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const usersResData = await usersResponse.json();

  // console.log("usersResData");
  // console.log(usersResData);

  const tasksResData = await tasksResponse.json();

  // console.log("tasksResData");
  // console.log(tasksResData);

  const projectsResData = await projectsResponse.json();

  const loaderData = {
    tasksResData,
    usersResData,
    projectsResData,
  };

  // console.log(loaderData);

  return loaderData;
}
