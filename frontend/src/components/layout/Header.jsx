import {Link, NavLink} from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="header-main max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="logo shrink-0">
                    <Link to="/" className="logo-link flex items-center gap-2">
                        <span className="logo-icon w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">UF</span>
                        <span className="text-xl font-bold text-gray-900 tracking-tight logo-text">UniFab</span>
                    </Link>
                </div>
            
            <nav className="hidden md:flex items-center flex-1 ml-12">
                <ul className="flex gap-8">
                    <li><NavLink to="/#services-grid" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">Services</NavLink></li>
                    <li><NavLink to="/database" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">Design Database</NavLink></li>
                    <li><NavLink to="/request-designer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">Request Designer</NavLink></li>
                    <li><NavLink to="/tracking" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide">Track Order</NavLink></li>
                </ul>
            </nav>

            <div className="user-actions flex gap-3 ml-auto items-center">
                <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2 px-4">Log In</Link>
                <Link to="/register" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium text-sm py-2.5 px-5 rounded-lg shadow-sm">Sign Up Free</Link>
            </div>
        </div>
        </header>
    )
}