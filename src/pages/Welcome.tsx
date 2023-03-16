import React from 'react'
import { useNavigate } from 'react-router-dom'

const users = [
    {
        from: 'from-red-600',
        to: 'to-red-300',
        name: 'User A'
    },
    {
        from: 'from-green-600',
        to: 'to-green-300',
        name: 'User B'
    },
    {
        from: 'from-yellow-600',
        to: 'to-yellow-300',
        name: 'User C'
    },
    {
        from: 'from-blue-600',
        to: 'to-blue-300',
        name: 'User D'
    },
    {
        from: 'from-pink-600',
        to: 'to-pink-300',
        name: 'User E'
    },
]

const Welcome = () => {

    const navigate = useNavigate()

  return (
    <div className='h-screen w-screen bg-black flex  justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-white text-5xl text-center'>Who's watching?</h2>
            <div className='mt-6 flex flex-wrap items-center gap-6 justify-center'>
                {
                    users.map(user => (
                        <div key={user.name} className='flex flex-col justify-center items-center' onClick={()=> navigate('/home')}>
                            <div key={user.name} className={`bg-gradient-to-b ${user.from} ${user.to} rounded-lg h-[6rem] w-[6rem] cursor-pointer`}>
                            </div>
                            <p className='text-slate-400 mt-2 text-md'>{user.name}</p>
                        </div>
                    ))
                }
            </div>
            <button className='border-2 border-slate-400 px-6 py-1 text-center mt-8 text-slate-400'>
                Manage Profiles
            </button>
        </div>
    </div>
  )
}

export default Welcome