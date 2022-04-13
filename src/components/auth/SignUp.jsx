import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, thumbnail, displayName, firstname, lastname)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
        <>
         <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-6">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold font-heading text-black dark:text-white">Sign Up</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  type="text" 
                  onChange={(e) => setDisplayName(e.target.value)} 
                  value={displayName}
                  id="username"
                  name="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="firstname" className="sr-only">
                  First Name
                </label>
                <input
                  type="text" 
                  onChange={(e) => setFirstname(e.target.value)} 
                  value={firstname}
                  id="firstname"
                  name="firstname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="first name"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text" 
                  onChange={(e) => setLastname(e.target.value)} 
                  value={lastname}
                  id="lastname"
                  name="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="last name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  id="email-address"
                  name="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="mb-2">
                        <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                            <div className="absolute">
                                <div className="flex flex-col items-center "> <i className="fa fa-cloud-upload fa-3x text-gray-200"></i> <span className="block text-gray-400 font-normal">Add your profile image here</span> <span className="block text-gray-400 font-normal">or</span> <span className="block text-blue-400 font-normal">Browse files</span> </div>
                            </div> <input required type="file"onChange={handleFileChange} className="h-full w-full opacity-0" />
                        </div>
                    </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-heading"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}