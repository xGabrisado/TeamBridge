import jwt_decode from "jwt-decode";

export function getTokenId() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null
    }

    const id = jwt_decode(token).sub;

    return id
}

export function getTokenEmail() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null
    }

    const userEmail = jwt_decode(token).userEmail;

    return userEmail
}
export function getTokenPermission() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null
    }

    const userPermission = jwt_decode(token).permission;

    return userPermission
}

export function getAuthenticationToken() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null
    }

    return token
}