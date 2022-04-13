import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function Like({post}) {
    const { user } = useAuthContext()
    const { updateDocument, response } = useFirestore('posts')
    const [newLike, setNewLike] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const likeToAdd = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: timestamp.fromDate(new Date()),
          id: Math.random()
        }
        
        await updateDocument(post.id, {
          likes: [...post.likes, likeToAdd],
        })
        if (!response.error) {
          setNewLike('')
        }
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
           <button 
                    type="submit" c
                    value={newLike}
                    onSubmit={setNewLike}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium font-heading rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
               Like
            </button>
          </form>
    </div>
  )
}
