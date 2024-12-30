import { useState } from 'react'
import { User } from './types.ts'
import { submitForm } from './api.ts'

const Form = () => {
    const [user, setUser] = useState<User>({
        username: '',
        age: 0,
        email: ''
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value }} = e
        setUser((pre) => ({
            ...pre, 
            [name]: name === 'age' ? Number(value) : value 
        }))
    }

    const submitHandler = async () => {
        const data = await submitForm(user)
        console.log(data)
    }

    return (
        <div>
            <input 
                type='text' 
                placeholder='username' 
                value={user.username}
                name='username'
                onChange={changeHandler}
            />
            <input 
                type='text' 
                placeholder='email' 
                value={user.email}
                name='email'
                onChange={changeHandler}
            />
            <input 
                type='number' 
                placeholder='age' 
                value={user.age}
                name='age'
                onChange={changeHandler}
            />
            <button onClick={submitHandler}>submit</button>
        </div> 
    )
}

export default Form
