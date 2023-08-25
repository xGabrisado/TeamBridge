const emailMatch = /[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/;

const usernameMatch = /^[a-z0-9_-]{3,15}$/;

const passwordMatch = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const cpjCnpjMatch = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/

export const RegExHelper = {
    emailMatch,
    usernameMatch,
    passwordMatch,
    cpjCnpjMatch,
}