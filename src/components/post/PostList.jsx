import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function PostList({ posts }) {
  return (
          <div>
            {posts.length === 0 && <p>No posts yet!</p>}
            {posts.map(post => (
              <Link to={`/posts/${post.id}`} key={post.id}>
              <div className="bg-white dark:bg-slate-900 rounded-lg px-8 py-8 ring-1 ring-slate-900/5 shadow-xl mb-4">
                <div key={post.id}>
                  <div className="w-full flex justify-between p-2">
                    <div className="flex">
                        <div className="rounded-full h-8 w-8 bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center overflow-hidden">
                          <img src={post.createdBy.photoURL} alt="profilepic" />
                        </div>
                        <span className="pt-1 ml-2 font-bold text-sm font-heading">@{post.createdBy.displayName}</span>  
                    </div>
                    {formatDistanceToNow(post.createdAt.toDate(), {addSuffix: true})}
                    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded font-body"></span>
                  </div>
                  <div className="px-3 pb-2">
                    <div className="pt-1">
                      <div className="mb-4 text-sm">
                        {post.details}
                      </div>
                    </div>    
                  </div>
                    <div className='mb-4'>
                      <span className="font-heading">{post.likes.length} Likes</span>
                      <button className="py-2 px-3 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading">Like</button>
                    </div>
                    <div className='mb-4'>
                      <span className="font-heading">{post.comments.length} Comments</span>
                      <button className="py-2 px-3 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading">Comment</button>
                    </div>
                  {post.comments.length > 0 && post.comments.map(comment => (
                    <>
                      <div className="w-full flex justify-between p-3">
                        <div className="flex">
                          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                            <img src={comment.photoURL} alt="profilepic" />
                          </div>
                          <span className="pt-1 ml-2 font-bold text-sm font-heading">@{comment.displayName}</span>  
                        </div>
                        {formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}
                        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"></span>
                      </div>
                      <div className="px-3 pb-2">
                        <div className="pt-1">
                          <div className="mb-2 text-sm font-heading">
                            {comment.content}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              </Link>
            ))}
           </div>
          )
        }