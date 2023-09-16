
'use client'
import ComposePostButton from './compose_post_button'
import { addPost } from '../actions/addPost'
import { useRef } from 'react'

export function ComposePost({
    userAvatarUrl,
}: {
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            formRef.current?.reset();
        }} className='flex flex-row p-3 broder-b border-white/20   '>
            <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <textarea name='content' rows={4} className='w-full text-xl bg-black placeholder-gray-500 p-2'
                    placeholder="What's it hapenning?!">
                </textarea>
                <ComposePostButton />
            </div>
        </form>
    )
}
