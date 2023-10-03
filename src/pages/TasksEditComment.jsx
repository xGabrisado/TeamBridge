import { redirect } from "react-router-dom";
import TarefasCommentEditing from "../components/Tarefa/TarefasCommentEditing";
import { getAuthToken } from "../utils/auth";

export default function TasksEditCommentPage() {
  return <TarefasCommentEditing />;
}

export async function loader({ params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const response = await fetch(
    "http://localhost:3000/tarefa/" +
      params.id +
      "/comentario/" +
      params.commentId,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    console.log("deu erro");
    console.log(response);
    return redirect(`/tasks/${params.id}`);
  }

  const resData = await response.json();

  console.log(resData);

  return resData;
}

export async function action({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }

  const data = await request.formData();

  const commentData = {
    commentText: data.get("commentText"),
  };

  const response = await fetch(
    "http://localhost:3000/tarefa/" +
      params.id +
      "/comentario/" +
      params.commentId,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    }
  );

  if (response.status === 401) {
    return response;
  }

  if (!response.ok) {
    console.log("deu erro");
    console.log(response);
    return redirect(`/tasks/${params.id}`);
  }

  const resData = await response.json();

  console.log(resData);

  return redirect(`/tasks/${params.id}`);
}
