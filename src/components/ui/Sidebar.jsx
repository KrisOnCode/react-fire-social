import User from '../user/User'

export default function Sidebar() {
    return (     
      <div className="w-fixed flex-shrink flex-grow-0 px-4">
       <User />
      </div>
    )
}
