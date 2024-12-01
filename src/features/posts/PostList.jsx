import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostIds } from './postSlice'
import PostExcerpt from './PostExcerpt'
import { useGetPostsQuery } from './postSlice'
import { logout, selectCurrentAuth, setCredentials } from '../users/authSlice'

const PostList = () => {
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const dispatch = useDispatch()
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const orderedPosts = useSelector(selectPostIds)
    const selectAuth = useSelector(selectCurrentAuth)

    let content
    if(isLoading) {
        content = <p>Loading....</p>
    } else if(isSuccess) {
        content = orderedPosts.map((post, idx) => <PostExcerpt key={idx} post={post} />)
    } else if(isError) {
        content = <p>{error}</p>
    }

    const handleSubmit = () => {
        if(username && password) {
            dispatch(setCredentials(username))
        }
    }

    const handlelogout = () => {
        dispatch(logout())
    }

    return (
        <section>
            <input
                type="text"
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit} >submit</button>
            {selectAuth ? (
                <>
                    <h2>Posts</h2>
                    {content}
                    <button onClick={handlelogout}>logout</button>
                </>
            ) : (
                <p>Please Logged In.....</p>
            )}

        </section>
    )
}

export default PostList