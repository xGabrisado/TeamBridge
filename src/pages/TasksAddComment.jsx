import { redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import TarefasAddComment from "../components/Tarefa/TarefasAddComment";

export default function TasksAddCommentPage() {
  return <TarefasAddComment />;
}

export async function action({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const tarefaid = params.id;
  const data = await request.formData();
  const commentData = {
    commentText: data.get("comment"),
  };
  //   const projectId = data.get("projectId");

  const response = await fetch(
    "http://localhost:3000/tarefa/" + tarefaid + "/comentario",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    }
  );

  if (!response.ok) {
    console.log("deu erro");
    console.log(response);
    return { message: "Email inválido" };
  }

  const resData = await response.json();

  console.log(resData);

  return { message: "Adicionado com sucesso!" };
}
