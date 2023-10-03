import { json, redirect } from "react-router-dom";
import TarefasTarefa from "../components/Tarefa/TarefasTarefa";
import { getAuthToken } from "../utils/auth";

export default function TasksTaskPage() {
  return <TarefasTarefa />;
}

export async function loader({ request, params }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const searchParams = new URL(request.url).searchParams;
  const status = searchParams.get("status") || null;
  const isDone = searchParams.get("isDone") || null;
  const mode = searchParams.get("mode") || null;

  if (mode === "delete") {
    const rusure = window.confirm(
      "Não haverá como recuperar os dados da tarefa, tem certeza?"
    );

    if (rusure) {
      const response = await fetch(
        "http://localhost:3000/tarefa/" + params.id,
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

      return redirect("/tasks");
    }

    return redirect("/tasks");
  }
  //   console.log("status", status);

  //   console.log(params.id);

  if (isDone) {
    const sendData = {
      isDone: true,
    };
    const rusure = await window.confirm(
      "Depois de concluir uma Tarefa, ela desaparecerá do painel de tarefas, não tem como alterar mais, tem certeza?"
    );
    // console.log("sendData", sendData);

    // return "this";
    if (rusure) {
      const response = await fetch(
        "http://localhost:3000/tarefa/" + params.id,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(sendData),
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
      // console.log("resData", resData);

      return redirect("/tasks");
    }
    return redirect("/tasks/" + params.id);
  }

  if (status) {
    const sendData = {
      taskStatus: status,
    };
    // console.log("sendData", sendData);

    // return "this";
    const response = await fetch("http://localhost:3000/tarefa/" + params.id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendData),
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
    // console.log("resData", resData);

    return redirect("/tasks");
  }

  const response = await fetch("http://localhost:3000/tarefa/" + params.id, {
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

  const resDataTask = await response.json();

  const responseComment = await fetch(
    "http://localhost:3000/tarefa/" + params.id + "/comentario",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (responseComment.status === "405") {
    return responseComment;
  }

  if (!responseComment.ok) {
    if (!responseComment.ok) {
      throw json({ message: "Could not fetch data" }, { status: 500 });
    }
  }

  const resDataComment = await responseComment.json();
  // console.log("resDataComment", resDataComment);

  const resData = {
    resDataTask,
    resDataComment,
  };

  return resData;
}
