import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";
import { useRouteLoaderData, useSubmit } from "react-router-dom";
import SignIn from "../components/SignIn";
import Principal from "../components/Principal";

export default function HomePage() {
  const token = useRouteLoaderData("root-router");
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
