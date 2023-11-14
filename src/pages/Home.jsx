import { useEffect } from "react";
import { getAuthToken, getTokenDuration } from "../utils/auth";
import { useLoaderData, useSubmit } from "react-router-dom";
import SignIn from "../components/SignIn";
import Principal from "../components/Principal";

export default function HomePage() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      {!token && <SignIn />}
      {token && <Principal />}
    </>
  );
}

export async function loader() {
  const token = getAuthToken();
  //   console.log(id);

  if (token) {
    console.log("teste");
    const response = await fetch("http://localhost:3000/notificacao", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const resData = await response.json();

    // console.log("resData not:", resData);

    if (!response.ok) {
      return null;
    }

    return resData;
  }
  return null;
}
