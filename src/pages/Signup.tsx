import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage'
import Navbar from '../components/Navbar'
import { auth } from '../utils/config';
import { IAuth as FormProps, validate } from '../utils/methods';


const Signup = () => {
    const [getStarted, setGetStarted] = useState<boolean>(false)
    const [formValues, setFormValues] = useState<FormProps>({
        password: "",
        email: ""
    })
    const [errors, setErrors] = useState<Partial<FormProps>>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const shouldGetStarted =()=> {
        setGetStarted(true)
    }

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
            await createUserWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
        }catch(error){
            console.log(error)
            setIsLoading(false)
        }
    }
    
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser)
            navigate('/login')
    })
    
  return (
    <div className='relative text-white'>
        <Navbar 
            isAuthPage 
            className='z-50' 
            authButton={()=><Link to='/login' className='bg-red-600 text-white px-4 py-1.5' >Signin</Link>}
        />
        <BackgroundImage className='absolute top-0 ' />
        <div className='bg-black/40 absolute top-0 w-screen h-screen z-10 flex justify-center items-center padding'>
            <div className='md:w-[40rem] flex flex-col justify-center items-center'>
                <h2 className='text-3xl md:text-6xl font-medium text-center mb-8'>Ultimate movies, TV show and more</h2>
                <h3 className='text-2xl mb-4 text-center'>Watch anywhere. Cancel anytime.</h3>
                <p className='mb-4 text-md text-center'>Ready to watch? Enter your email to create or restart membership</p>

                <form className='flex flex-col items-center w-full justify-center' onSubmit={handleSubmit}>
                    <div className='flex w-full gap-4 sm:gap-1 flex-col sm:flex-row'>
                        <input 
                            className={`flex-1 p-2 focus:outline-none text-black ${errors?.email && 'bg-red-300 placeholder:text-red-500'}`}
                            type="email" 
                            name='email' 
                            placeholder={errors?.email? errors?.email : 'Enter email'}
                            onFocus={()=>setGetStarted(false)} 
                            onChange={handleChange}
                        />
                        {
                            getStarted && 
                            <input 
                                className={`flex-1 p-2 focus:outline-none text-black ${errors?.password && 'bg-red-300 placeholder:text-red-500'}`}
                                type="password"
                                name='password'
                                placeholder={errors?.password? errors?.password : 'Enter password'}
                                onChange={handleChange}
                            />
                        }

                        {!getStarted && <button className='bg-red-600 text-center flex-1 p-2' onClick={shouldGetStarted}>Get Started</button>}
                    </div>
                    {getStarted && <button type='submit' className='bg-red-600 text-white px-4 py-2 mt-4 w-full sm:w-fit' disabled={isLoading}>Signup</button>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup