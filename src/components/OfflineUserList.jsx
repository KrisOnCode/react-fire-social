import {useCollection} from '../hooks/useCollection'

export default function OfflineUserList() {
  const { isPending, error, documents } = useCollection('users')
    return (
        <div class="flex flex-col justify-between mt-6">
          <aside>
            <ul>
           
              <li>
                
                <a class="flex items-center px-4 py-2 text-gray-700 rounded-md " href="#">
                  <span class="mx-4 font-medium">Offline Users:</span>
                </a>
                
              </li>
              {documents && documents.map(user => (
              <li  key={user.id}>
                {!user.online &&
                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md" href="#">
                <img class="inline object-cover w-12 h-12 mr-2 rounded-full" src={user.photoURL} alt="Profile image"/>
                <span class="mx-4 font-medium">{user.displayName}</span>
              </a>
                  }
              </li>
              ))}
            </ul>

          </aside>
          
        </div>
    )
}
