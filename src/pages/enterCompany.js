import { redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

export async function action({ request }) {
    const token = getAuthToken();
    const data = await request.formData();
    const companyToken = {
        companyToken: data.get("companyToken")
    };
    // console.log(companyToken);
    const response = await fetch("http://localhost:3000/auth/loginEmpresa", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(companyToken)
    });

    const resData = await response.json();
    // console.log(resData);

    return redirect("/company");
}
