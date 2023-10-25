import { Box } from "@mui/material";
import { getAuthToken } from "../utils/auth";
import { redirect } from "react-router-dom";

export default function NotificationUpdatePage() {
    return <Box></Box>
}

export async function loader({request, params}) {
    const id = params.id
    console.log(id);

    const token = getAuthToken();
    if (!token) {
        return redirect("/");
    }

    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || null;

    if (mode === 'update') {
        const response = await fetch('http://localhost:3000/notificacao/' + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({isOpen: true})
        })

        return redirect('/notificacoes')
    }
    
}