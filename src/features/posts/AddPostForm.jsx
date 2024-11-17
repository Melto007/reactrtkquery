import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { getAllUsers } from '../users/userSlice'
import { useAddNewPostMutation } from './postSlice'

const AddPostForm = () => {
    const [ addNewPost, { isLoading } ] = useAddNewPostMutation()

    // const users = useSelector(getAllUsers)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    // const onAuthorChanged = e => setUserId(e.target.value)

    const onSave = [title, content].every(Boolean) && !isLoading

    const onSavePostClicked = async () => {
        if (onSave) {
            try {
                await addNewPost({ title, body: content, userId }).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    // const userOption = users.map(user => (
    //     <option key={user.id} value={user.id}>
    //         {user.name}
    //     </option>
    // ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                {/* <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOption}
                </select> */}
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={onSave ? false : true}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm