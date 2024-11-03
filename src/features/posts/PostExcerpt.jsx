import React from 'react'
// import PostAuthor from "./PostAuthor";
// import TimeAgo from "./TimeAgo";
// import ButtonReaction from "./ButtonReaction"
// import { Link } from 'react-router-dom'
import { selectPostById } from "./postSlice"
import { useSelector } from 'react-redux'

const PostExcerpt = ({ post }) => {
    const postData = useSelector(state => selectPostById(state, post))

    return (
        <>
          <article>
            <h2>{postData.title}</h2>
            <p className="excerpt">{postData.body.substring(0, 75)}...</p>
            {/* <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} /> */}
        </article>
        </>
    )
}

export default PostExcerpt