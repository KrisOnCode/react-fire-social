import {useAuthContext} from '../hooks/useAuthContext'

export default function User() {
    const { user } = useAuthContext()
    return (
        <>
        <div>
            <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src={user.photoURL}/>
            <h2 class="text-3xl font-semibold text-center text-amber-800">{user.displayName}</h2>
         </div>
        </>
    )
}