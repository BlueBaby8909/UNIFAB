import { Link } from "react-router-dom";

export default function Login() {
    return(
        <main>
            <section className="eyebrow login-section min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
                <div className="login-container bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-8 w-full max-w-md">

                    <div className="form-header text-center mb-8">
                        <span className="logo-icon w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">UF</span>
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Welcome Back</h1>
                        <p className="text-sm text-gray-500">Log in to track and manage your print requests.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}  className="login-form">

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email address" required autoComplete="email"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                        </div>

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <div className="label-row flex items-center justify-between">
                                <label htmlFor="password" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                                <Link to="/forgot-password" className="forgot-password-link text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">Forgot Password?</Link>
                            </div>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required autoComplete="current-password"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-3 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mt-2">Log In</button>
                        </div>

                    </form>

                    <p className="register-hint text-center text-sm text-gray-500 mt-6">Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">Sign up</Link></p>

                </div>
            </section>
        </main>
    )
}