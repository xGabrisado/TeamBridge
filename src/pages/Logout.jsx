import { redirect } from "react-router-dom";

export default function LogoutPage() {
  return <p></p>
}

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
