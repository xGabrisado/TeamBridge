import { getAuthToken } from "../utils/auth";
import { json } from "react-router-dom";
import TokenCreation from "../components/Tokencreation";

export default function CreateCompanyToken() {
  return <TokenCreation />;
}

export async function loader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:3000/auth/empresa", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData);
  return resData.companyToken;
}
