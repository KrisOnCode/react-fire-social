import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { timestamp } from '../firebase/config'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router'

export default function Create() {
  const history = useHistory()
  const { addDocument, response } = useFirestore('messages')
  const { user } = useAuthContext()
  const [details, setDetails] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    const createdBy = { 
      displayName: user.displayName,
      photoURL: user.photoURL, 
      id: user.uid,
      createdAt: timestamp.fromDate(new Date()),
    }

    const message = {
      details,
      createdBy,
    }

    await addDocument(message)
    if (!response.error) {
      history.push('/')
    }
  }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex items-center justify-between w-full p-3 border-t border-gray-300">
        <input  className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                type="text" 
                placeholder="Message" 
                onChange={(e) => setDetails(e.target.value)}
                value={details} 
                name="message" 
                required />        
          <button type="submit">
          <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
        </form>
      </>
    )
}
