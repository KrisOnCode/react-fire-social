import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import { useCollection } from '../hooks/useCollection'
import PostList from '../components/PostList'


export default function Home() {
    const { documents, error } = useCollection('posts')
    const posts = documents 
    return (
        <div className="grid grid-cols-12">
            <div className="col-start-0 col-span-3">
                <Sidebar />
            </div>
            <div className="col-start-4 col-span-5">
                {error && <p classNameName="error">{error}</p>}
                {posts && <PostList posts={posts} />}
            </div>
            <div className="col-end-12 col-span-3">
                <RightSidebar />
            </div>
        </div>
           
                    
               
                    
           
                    
                
        
                        
                  
    )
}