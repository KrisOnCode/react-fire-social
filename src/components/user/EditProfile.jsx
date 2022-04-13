import { useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import Sidebar from '../ui/Sidebar'
import RightSidebar from '../ui/RightSidebar'


export default function EditProfile() {
    const { user } = useAuthContext()
    const id = user.uid
    const [newBio, setNewBio] = useState()
    const [newCity, setNewCity] = useState()
    const [newSt, setNewSt] = useState()
    const userRef = projectFirestore.collection('users').doc(id)

    const updateProfile = () => {
      userRef.update({
        city: newCity,
        st: newSt,
        bio: newBio
      })}

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProfile(newCity, newSt, newBio)
      }


    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-3">
                <Sidebar />
            </div>
            <div className="col-start-4 col-span-5">
            <div className="w-full h-full p-4 m-8 overflow-y-auto">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold font-heading text-slate-900 dark:text-slate-100">Update Your Profile</h2>
                    </div>
                     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="city" className="sr-only">
                                    City
                                </label>
                                <input
                                type="text" 
                                onChange={(e) => setNewCity(e.target.value)} 
                                value={newCity}
                                id="city"
                                name="city"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Your city"
                                />
                            </div>
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="st" className="sr-only">
                                    State
                                </label>
                                <input
                                type="text" 
                                onChange={(e) => setNewSt(e.target.value)} 
                                value={newSt}
                                id="st"
                                name="st"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Your state"
                                />
                            </div>
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="bio" className="sr-only">
                                    Add a bio
                                </label>
                                <input
                                type="text" 
                                onChange={(e) => setNewBio(e.target.value)} 
                                value={newBio}
                                id="bio"
                                name="bio"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Your bio"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium font-heading rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Update Profile
                             </button>
                         </div>
                        </form>
                </div>
            </div>
            </div>
            <div className="col-end-12 col-span-3">
                <RightSidebar />
            </div>
        </div>
    )
}