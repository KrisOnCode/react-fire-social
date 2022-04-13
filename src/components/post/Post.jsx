import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Sidebar from "../ui/Sidebar"
import RightSidebar from "../ui/RightSidebar"
import Comment from './Comment'
import Like from './Like'

export default function Post() {
  const { id } = useParams()
  const { document, error } = useDocument('posts', id)
 
  const post = document

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="grid grid-cols-12">
    <div className="col-start-0 col-span-3">
        <Sidebar />
    </div>
    <div className="col-start-4 col-span-5">
    <div className="bg-white dark:bg-slate-900 rounded-lg px-8 py-8 ring-1 ring-slate-900/5      shadow-xl mb-4">
      <div key={post.id}>
        <div className="w-full flex justify-between p-2">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center overflow-hidden">
              <img src={post.createdBy.photoURL} alt="profilepic" />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm font-heading">@{post.createdBy.displayName}</span>
          </div>
          {formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true })}
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded font-body"></span>
        </div>
        <div className="px-3 pb-2">
          <div className="pt-1">
            <div className="mb-4 text-sm">
              {post.details}
            </div>
          </div>
          <div className="w-full flex justify-between p-2">
            <div className="flex">
          <span className="font-heading">{post.likes.length} Likes</span>
          <Like post={document} />
          </div>
          </div>
          <div>
          <span className="font-heading">{post.comments.length} Comments</span>
          <Comment post={document} />
          </div>
        </div>
      </div>
    </div>
    </div>
            <div className="col-end-12 col-span-3">
                <RightSidebar />
            </div>
        </div>
  )
}
