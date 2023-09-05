import { redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

export async function action({ request }) {
  const token = getAuthToken();
  if (!token) {
    return redirect("/");
  }
  const data = await request.formData();

  const formData = {
    userId: data.get("userId"),
  };

  const projectId = data.get("projectId");

  const response = await fetch(
    "http://localhost:3000/projeto/removeUser/" + projectId,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    return response;
  }

  return redirect("/projects/" + projectId);
}
