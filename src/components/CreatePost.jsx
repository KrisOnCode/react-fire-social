import { useState, useEffect } from 'react'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
import { timestamp } from '../firebase/config'
import { useFirestore } from '../hooks/useFirestore'
import { useHistory } from 'react-router'

export default function Create() {
  const history = useHistory()
  const { addDocument, response } = useFirestore('posts')
  const { user } = useAuthContext()
  const { documents } = useCollection('users')

  // form field values
  const [details, setDetails] = useState('')
  const [users, setUsers] = useState([])
  const [formError, setFormError] = useState(null)

  // create user values for react-select
  useEffect(() => {
    if(documents) {
      setUsers(documents.map(user => {
        return { value: {...user, id: user.id}, label: user.displayName }
      }))
    }
  }, [documents])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    const createdBy = { 
      displayName: user.displayName, 
      photoURL: user.photoURL,
      id: user.uid
    }

    const post = {
      details,
      createdBy,
      createdAt: timestamp.fromDate(new Date()),
      comments: [],
      likes: [],
    }

    await addDocument(post)
    if (!response.error) {
      history.push('/')
    }
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="mb-3 xl:w-96">
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control block w-full px-3 py-1.5 font-normal bg-white dark:bg-slate-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details} 
            id="post"
            rows="3"
            placeholder="Say something"
          ></textarea>
           <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium font-heading rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
               Post it
            </button>
            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
    </div>
  )
}

