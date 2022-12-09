import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const SignUp = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const navigate = useNavigate()

    const register = async () => {
        const name = nameRef.current.value.trim()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const passwordConfirmation = passwordConfirmationRef.current.value
        if (!/^[A-Z][a-z]+ ([A-Z][a-z]+ ){0,2}([A-Z][a-z]+)$/.test(name)) {
            alert('Please enter a valid name')
           
        }
        const response = await fetch(`${process.env.REACT_APP_API}/users/register`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        
        if (json.success) {
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } else {
            window.alert(json.messages[0])
        }
    }
    return(
        <div>
            <div>
                <div>
                    <div>
                        <label htmlFor='name' className={`mb-2`} >Name</label>
                        <label htmlFor='email' className={`mb-2`} >email</label>
                        <label htmlFor='password' className={`mb-2`} >password</label>
                        <label htmlFor='password_confirmation' className={`mb-2`} >password_confirmation</label>

                        <input type='button' value='Register' onClick={register}></input>
                    </div>
            </div>
           </div>
        </div>
        
    )
}

export default SignUp