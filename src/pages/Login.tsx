import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackgroundImage from '../components/BackgroundImage'
import Navbar from '../components/Navbar'
import { auth } from '../utils/config';
import { IAuth as FormProps, validate } from '../utils/methods';

const Login = () => {
    const [formValues, setFormValues] = useState<FormProps>({
        password: "",
        email: ""
    })
    const [errors, setErrors] = useState<Partial<FormProps>>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
        if((name === 'email' || name === 'password') && (errors?.email || errors?.password)  ){
            delete errors[name]
        }
    }

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const {isValid, errors} = validate(formValues)

        if(!isValid){
            setErrors(errors)
            return
        }
        
        try{
            setIsLoading(true)
            const {email, password} = formValues
            await signInWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            setIsLoading(false)
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser)
            navigate('/')
    })


  return (
    <div className='relative text-white'>
        <Navbar 
            isAuthPage 
            className='z-50' 
            authButton={()=><Link to='/signup' className='bg-red-600 text-white px-4 py-1.5'>Signup</Link>}
        />
        <BackgroundImage className='absolute top-0 ' />
        <div className='bg-black/40 absolute top-0 w-screen h-screen z-10 flex justify-center items-center'>
            <div className='bg-black md:w-[30rem] px-8 py-8'>
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <label className='mb-4 text-lg'> Login </label>
                    <div>
                        <input 
                            className={`w-full p-2 mb-8 focus:outline-none text-black ${errors?.email && 'bg-red-300 placeholder:text-red-500'}`} 
                            type="email" 
                            name='email' 
                            placeholder={errors?.email? errors?.email : 'Enter email'}
                            onChange={handleChange}
                        />
                        <input 
                            className={`w-full p-2 mb-8 focus:outline-none text-black ${errors?.password && 'bg-red-300 placeholder:text-red-500'}`} 
                            type="text" 
                            name='password'
                            placeholder={errors?.password? errors?.password : 'Enter password'}
                            onChange={handleChange}
                        />
                        <button type='submit' className='bg-red-600 text-center w-full p-2' disabled={isLoading}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login