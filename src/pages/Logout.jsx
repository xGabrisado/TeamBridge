// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { tokenActions } from "../store/tokenPayload";
import store from "../store";

export default function LogoutPage() {
  return <p></p>
}

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  store.dispatch(tokenActions.removeTokenPayload())
  return redirect("/");
}
