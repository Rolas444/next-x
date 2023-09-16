'use client'

import { useEffect, useRef } from 'react';
import { experimental_useFormStatus as  useFormStatus} from 'react-dom'

const ComposePostTextarea = () => {
    const {pending} = useFormStatus();
    const alreadySent = useRef(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null)


    useEffect(()=>{
        if(textAreaRef.current===null) return ;

        if(!pending &&  alreadySent.current) {
            alreadySent.current = false;
            textAreaRef.current.value = '';
            console.log('me ejecuté')
            return;
        }

        alreadySent.current= pending;
    }, [pending])

    return (
        <textarea name='content' rows={4} className='w-full text-xl bg-black placeholder-gray-500 p-2'
            placeholder="What's it hapenning?!">
        </textarea>
    )
}

export default ComposePostTextarea