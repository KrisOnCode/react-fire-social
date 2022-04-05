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
        <div className="card flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64">
            {/* Avatar */}
            <div className="profile mx-autor  py-2 w-16">
                <img className='rounded-full' src={user.photoURL} alt="profile" />
            </div>
            {/*  Name */}
            <div class="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>{document.firstname} {document.lastname}</p>
            </div>  
            {/* Username */}
            <div class="username text-gray-500">
                <p>@{user.displayName}</p>
            </div>
        </div>
        </>
    )
}