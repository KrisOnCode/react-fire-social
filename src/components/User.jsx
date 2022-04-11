import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useDocument } from '../hooks/useDocument'
 
export default function User() {
    const { user } = useAuthContext()
    const { document, error } = useDocument('users', user.uid)

        if (error) {
        return <div className="error">{error}</div>
    }
        if (!document) {
        return <div className="loading">Loading...</div>
     }

    return (
        <>
        <div className="card bg-white dark:bg-slate-900 flex flex-col items-center  p-4 w-80 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            {/* Avatar */}
            <div className="profile mx-autor  py-2 w-16">
                <img className='rounded-full' src={user.photoURL} alt="profile" />
            </div>
            {/*  Name */}
            <div className="name text-slate-900 dark:text-slate-50  text-2xl font-medium mt-4 font-heading">
                <p>{document.firstname} {document.lastname}</p>
            </div>  
            {/* Username */}
            <div className="username slate-gray-700 dark:text-slate-200 font-heading">
                <p>@{user.displayName}</p>
            </div>
            <div className="location slate-gray-700 dark:text-slate-200 font-heading">
                <p>{document.city}, {document.st}</p>
            </div>
            <br/>
            <div className="bio slate-gray-700 dark:text-slate-200 mb-4 font-heading">
                <p>{document.bio}</p>
            </div>
            <div>
                <Link to="/edit-profile">
                    <button class="py-2 px-2 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading">Edit Profile</button>
                </Link>  
            </div>
        </div>
        </>
    )
}