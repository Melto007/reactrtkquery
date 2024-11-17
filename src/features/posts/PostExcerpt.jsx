import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ButtonReaction from "./ButtonReaction"
import { Link } from 'react-router-dom'
import { selectPostById } from "./postSlice"
import { useSelector } from 'react-redux'

const PostExcerpt = ({ post }) => {
    const postData = useSelector(state => selectPostById(state, post))

    return (
        <>
            <article>
                <h2>{postData.title}</h2>
                <p className="excerpt">{postData.body.substring(0, 75)}...</p>
                <p className="postCredit">
                    <Link to={`post/${postData.id}`}>View Post</Link>
                    {/* <PostAuthor userId={postData.userId} /> */}
                    <TimeAgo timestamp={postData.date} />
                </p>
                <ButtonReaction post={postData} />
            </article>
        </>
    )
}

export default PostExcerpt