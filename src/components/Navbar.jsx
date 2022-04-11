import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import useDarkMode from '../hooks/useDarkmode';
import ThemeToggler from './ThemeToggler';
import MoonIcon from '../assets/MoonIcon'
import SunIcon from '../assets/SunIcon'

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();
    const { logout } = useLogout()
    const { user } = useAuthContext()
    return (
        <>
          <nav className="font-heading flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <a href="/home" className="text-2xl no-underline text-slate-900 dark:text-slate-100 font-heading">React Fire Social</a>
                </div>
                <div className="flex items-center space-x-2">
                {!user && (
                    <>
                        <Link to="/login">
                            <button className="py-2 px-2 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading">Log In</button>   
                        </Link>


                        <Link to="/signup">
                            <button className="py-2 px-2 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading">Sign Up</button> 
                        </Link>
                    </>
                )}
                {user && (
                    <>
                        <Link>
                            <button className="py-2 px-2 w-full rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-50 font-heading" onClick={logout}>Logout</button> 
                        </Link>
                    </>
                )}
                    <SunIcon />
                    <ThemeToggler darkMode={darkMode} setDarkMode={setDarkMode} />
                    <MoonIcon />
                </div>
            </nav> 
        </>
    )
}

       