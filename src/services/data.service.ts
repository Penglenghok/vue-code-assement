import axios from "axios";


export async function getUserRef() {
    return await axios.get("https://api.github.com/users")
}

export async function getUserDetail(login) {
    return await axios.get(`https://api.github.com/users/${login}`)
}