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
  //   console.log("status", status);

  //   console.log(params.id);

  if (isDone) {
    const sendData = {
      isDone: true,
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

  const resData = await response.json();
  console.log(resData);
  return resData;
}
