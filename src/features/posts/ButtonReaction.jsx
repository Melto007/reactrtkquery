import React from 'react'
import { useAddReactionMutation } from './postSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ButtonReaction = ({ post }) => {
    const [ addReaction ] = useAddReactionMutation()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    {
                        const newValue = post.reactions[name] + 1
                        addReaction({ postId: post.id, reactions: { ...post.reactions, [name]: newValue } })
                    }
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}

export default ButtonReaction