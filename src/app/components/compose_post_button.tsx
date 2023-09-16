'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ComposePostButton = () => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type='submit' 
        className='bg-sky-500 font-bold disabled:opacity-40 disabled:pointer-events-none text-sm rounded-full px-5 py-2 self-end'>
            {pending? 'Pending': 'Post'}
        </button>
    )
}

export default ComposePostButton