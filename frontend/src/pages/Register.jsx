import {Link} from "react-router-dom";

export default function Register() {
    return(
        <main>
            <section className=" eyebrow register-section min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
                <div className="register-container bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-8 w-full max-w-md">

                    <div className="form-header text-center mb-8">
                        <span className="logo-icon w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">UF</span>
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">Create Your Account</h1>
                        <p className="text-sm text-gray-500">Join the USTP-CDO Fabrication Laboratory platform.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="register-form">

                        <div className="form-row grid grid-cols-2 gap-4">
                            <div className="field-group flex flex-col gap-1.5 mb-5">
                                <label htmlFor="first-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">First Name</label>
                                <input type="text" id="first-name" name="first_name" placeholder="Juan" required
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                            </div>
                            <div className="field-group flex flex-col gap-1.5 mb-5">
                                <label htmlFor="last-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Name</label>
                                <input type="text" id="last-name" name="last_name" placeholder="Dela Cruz" required
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                            </div>
                        </div>

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="juan.delacruz@ustp.edu.ph" required
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                        </div>

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <label htmlFor="role" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">I am a...</label>
                            <select id="role" name="role" required
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200">
                                <option value="">Select Role</option>
                                <option value="student">Student</option>
                                <option value="researcher">Researcher</option>
                                <option value="faculty">Faculty</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <label htmlFor="password" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Password</label>
                            <input type="password" id="password" name="password" placeholder="Min. 8 characters" required
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                        </div>

                        <div className="field-group flex flex-col gap-1.5 mb-5">
                            <label htmlFor="confirm-password" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm_password" placeholder="Re-enter your password" required
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                        </div>

                        <div className="terms-row flex items-start gap-3 my-5">
                            <input type="checkbox" id="terms" name="terms" required
                                className="w-4 h-4 accent-blue-600 cursor-pointer shrink-0"/>
                            <label htmlFor="terms" className="text-xs text-gray-500">I agree to the <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">Terms of Service</Link></label>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-3 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mt-2">Create Account</button>
                            <p className="login-hint text-center text-sm text-gray-500 mt-6">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Log in</Link></p>
                        </div>

                    </form>

                </div>
            </section>
        </main>
    )
}