import CompleteForm from "@/components/Zod/CompleteForm"


const Complete = () => {
  return (
    <div className='flex p-5 flex-col gap-3'>
        <p className='text-3xl text-red-500'>Complete Form With Zod | useForm | shadcn
        <br />
         All files are available in component > Zod > completeComp and all points are in main folder of this project</p>
         <div className='flex justify-center p-2'>
            <CompleteForm />
         </div>
    </div>
  )
}

export default Complete