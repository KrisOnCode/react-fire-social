import { useCollection } from '../../hooks/useCollection'
import Sidebar from '../ui/Sidebar'
import RightSidebar from '../ui/RightSidebar'
import PostList from '../post/PostList'
import CreatePost from '../post/CreatePost'

export default function Home() {
    const { documents, error } = useCollection('posts')
    const posts = documents 
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-3">
                <Sidebar />
            </div>
            <div className="col-start-4 col-span-5">
            <CreatePost />
                {error && <p classNameName="error">{error}</p>}
                {posts && <PostList posts={posts} />}
            </div>
            <div className="col-end-12 col-span-3">
                <RightSidebar />
            </div>
        </div>
           
                    
               
                    
           
                    
                
        
                        
                  
    )
}