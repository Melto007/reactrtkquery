// import React from 'react'
// import { reactionAdded } from './postSlice'
// import { useDispatch } from 'react-redux'

// const reactionEmoji = {
//     thumbsUp: '👍',
//     wow: '😮',
//     heart: '❤️',
//     rocket: '🚀',
//     coffee: '☕'
// }

// const ButtonReaction = ({ post }) => {
//     const dispatch = useDispatch()

//     const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
//         return (
//             <button
//                 key={name}
//                 type="button"
//                 className="reactionButton"
//                 onClick={() =>
//                     dispatch(reactionAdded({ postId: post.id, reaction: name }))
//                 }
//             >
//                 {emoji} {post.reactions[name]}
//             </button>
//         )
//     })

//     return <div>{reactionButtons}</div>
// }

// export default ButtonReaction