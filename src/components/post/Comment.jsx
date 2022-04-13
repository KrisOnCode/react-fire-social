import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function Comments({ post }) {
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('posts')
  const [newComment, setNewComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }
    
    await updateDocument(post.id, {
      comments: [...post.comments, commentToAdd],
    })
    if (!response.error) {
      setNewComment('')
    }
  }

  return (
    <div className="post-comments">
      <ul>
        {post.comments.length > 0 && post.comments.map(comment => (
          <li key={comment.id}>
            <div className="w-full flex justify-between p-3">
              <div className="flex">
                <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                  <img src={comment.photoURL} alt="profilepic" />
                </div>
                <span className="pt-1 ml-2 font-bold text-sm font-heading">@{comment.displayName}</span>
              </div>
              {formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}
              <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"></span>
            </div>
            <div className="px-3 pb-2">
                        <div className="pt-1">
                          <div className="mb-2 text-sm font-heading">
                            {comment.content}
                          </div>
                        </div>
                      </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-8">
      <div className="mb-3 xl:w-96">
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control block w-full px-3 py-1.5 font-normal bg-white dark:bg-slate-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment} 
            id="post"
            rows="3"
            placeholder="What do you want to say"
          ></textarea>
           <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium font-heading rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
               Add a comment
            </button>
          </form>
        </div>
    </div>
    </div>
  )
}