import { redirect } from "react-router-dom";
import TarefasEditing from "../components/Tarefa/TarefasEditing";
import { getAuthToken } from "../utils/auth";

export default function TasksEditingPage() {
  return <TarefasEditing />;
}

export async function action({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const data = await request.formData();

  let splitDate = data.get("taskDeadLine").split("/");

  const concatDate = splitDate[2].concat(`-${splitDate[1]}-${splitDate[0]}`);

  const taskData = {
    taskName: data.get("taskName"),
    taskPriority: data.get("taskPriority"),
    taskDeadline: concatDate,
  };

  const response = await fetch("http://localhost:3000/tarefa/" + params.id, {
    method: "PATCH",
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

  console.log(resData);

  return redirect("/tasks");
}
