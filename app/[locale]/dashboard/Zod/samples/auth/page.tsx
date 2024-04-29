import LoginForm from '@/components/auth/loginComp/LoginForm'
import RegisterForm from '@/components/auth/registerComp/RegisterForm'
import React from 'react'

const ZodPage = () => {
  return (
    <div className='flex p-5 flex-col gap-3'>
        <p className='text-3xl text-red-500'>Login Form With Zod | useForm | shadcn
        <br />
         All files are available in component > auth > loginComp and all points are in main folder of this project</p>
         <div className='flex gap-3'>
         <LoginForm />
         <RegisterForm />
         </div>
         <p className='text-3xl text-red-500'>If you want input like login inputs add standard to Input in FIeld</p>
    </div>
  )
}

export default ZodPage