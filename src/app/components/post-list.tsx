import React from 'react'
import PostCard from './post-card'
import { type Post } from '@/app/types/posts'


const PostList = ({posts}: {posts:Post[] | null}) => {
  return (
    <>
        {
            posts?.map(post => {
                const {
                  id,
                  user,
                  content
                } = post
                const {
                  user_name: username,
                  name: userFullName,
                  avatar_url: avatarUrl,
                }= user
                return (
                  <PostCard
                  {...{ username, userFullName, avatarUrl,content}}
                  key={post.id}
                  />
                )
              })
        }
    </>
  )
}

export default PostList