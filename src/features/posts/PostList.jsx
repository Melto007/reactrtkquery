import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostIds } from './postSlice'
import PostExcerpt from './PostExcerpt'
import { useGetPostsQuery } from './postSlice'

const PostList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const orderedPosts = useSelector(selectPostIds)

    let content
    if(isLoading) {
        content = <p>Loading....</p>
    } else if(isSuccess) {
        content = orderedPosts.map((post, idx) => <PostExcerpt key={idx} post={post} />)
    } else if(isError) {
        content = <p>{error}</p>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}

export default PostList