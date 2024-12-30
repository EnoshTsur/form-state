import { User } from "./types";

export const submitForm = async (user: User) => {
    const response = await fetch(
        'http://localhost:5000/api/users/add',
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return await response.json()
}
