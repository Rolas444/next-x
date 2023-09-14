import { Avatar } from '@nextui-org/react'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
// import { revalidatePath } from 'next/cache'


export function ComposePost({
    userAvatarUrl,
}: {
    userAvatarUrl: string
}) {

    const handleSubmit=() => {

    }

    return (
        <form action={handleSubmit} className='flex flex-row space-x-4 p-4 broder-b border-white/20   '>
            <img className='rounded-full w-10 h-10   object-contain' src={userAvatarUrl}/>
            <div className='flex flex-1 flex-col gap-y-4'>
                <textarea name='post' rows={4} className='w-full text-xl bg-black placeholder-gray-500 p-2'
                    placeholder="What's it hapenning?!">
                </textarea>
                <button type='submit' className='bg-sky-500 font-bold text-sm rounded-full px-5 py-2 self-end'>
                    Post
                </button>
            </div>
        </form>
    )
}