import {useCollection} from '../hooks/useCollection'
import OnlineIcon from '../assets/OnlineIcon'


  export default function UserList() {
    const { isPending, error, documents } = useCollection('users')
    return (
        <div>
        
            {/* Avatar */}
            
            {documents && documents.map(otherUser => (
            <>
            <div className="card bg-white dark:bg-slate-900 flex flex-col items-center  p-4 w-96 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mb-4">
            
            <div className="profile mx-autor  py-2 w-16">
                <img className='rounded-full' src={otherUser.photoURL} alt="profile" />
            </div>
            {/*  Name */}
            <div className="name text-slate-900 dark:text-slate-50  text-2xl font-medium mt-4 font-heading">
                <p>{otherUser.firstname} {otherUser.lastname}</p>
            </div>  
            {/* Username */}
            <div className="username slate-gray-700 dark:text-slate-200 font-heading">
                <p>@{otherUser.displayName}</p>
            </div>
            <div className="location slate-gray-700 dark:text-slate-200 font-heading">
                <p>{otherUser.city}, {otherUser.st}</p>
            </div>
                <br />
            <div className="bio slate-gray-700 dark:text-slate-200 mb-4 font-heading">
                <p>{otherUser.bio}</p>
            </div>
            </div>
            </>
            ))}
        
        </div>
     
    )
}
