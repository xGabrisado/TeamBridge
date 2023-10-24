import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import { getAuthToken } from "../utils/auth";

export default function RootLayout() {
  return (
    <>
      <Dashboard Outlet={<Outlet />} />
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

    console.log("resData not:", resData);

    return resData;
  }
  return null;
}
