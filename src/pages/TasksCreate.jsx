import { redirect } from "react-router-dom";
import TarefasCreate from "../components/Tarefa/TarefasCreate";
import { getAuthToken } from "../utils/auth";

export default function TasksCreatePage() {
  return <TarefasCreate />;
}

export async function action({ request }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const data = await request.formData();

  let splitDate = data.get("taskDeadline").split("/");
  const concatDate = splitDate[2].concat(`-${splitDate[1]}-${splitDate[0]}`);

  //   console.log("tasksDeadLine");
  //   console.log(concatDate);

  const taskData = {
    taskName: data.get("taskName"),
    taskPriority: data.get("taskPriority"),
    taskDeadline: concatDate,
    usuario: [data.get("id")],
    projeto: Number(data.get("projetoId")),
  };

  //   console.log("taskData");
  //   console.log(taskData);

  //   return "this";

  const response = await fetch("http://localhost:3000/tarefa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
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

  //   console.log(resData);

  return redirect("/tasks");
}
