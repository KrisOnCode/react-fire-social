import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function MessageList() {
  const { user } = useAuthContext()
  const { isPending, error, documents } = useCollection('messages')
  return (
    <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
      <ul class="space-y-2">
      {documents && documents.map(message => (
        <div key={message.id}>
          {user.uid === message.createdBy.id &&
            <>
              <li className="flex justify-start">
                <a className="flex items-center px-4 py-2 mt-5 text-green-600 rounded-md" href="#">
                <img className="inline object-cover w-8 h-8 rounded-full" src={message.createdBy.photoURL} alt="Profile image"/>
                  <span className="mx-4 font-medium">{message.details}</span>
                  <p>{formatDistanceToNow(message.createdAt.toDate(), {addSuffix: true})}</p>
                </a>
              </li>
              </>
              }
              {user.uid !== message.createdBy.id &&
            <>
              <li className="flex justify-end">
                <a className="flex items-center px-4 py-2 mt-5 text-blue-600 rounded-md" href="#">
                <img className="inline object-cover w-8 h-8 rounded-full" src={message.createdBy.photoURL} alt="Profile image"/>
                  <span className="mx-4 font-medium">{message.details}</span>
                  <p>{formatDistanceToNow(message.createdAt.toDate(), {addSuffix: true})}</p>
                </a>
              </li>
              </>
              }
            </div>
              ))}
      </ul>
    </div>
  )
}
