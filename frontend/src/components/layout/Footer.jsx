import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="bg-gray-950 text-gray-400 py-16">
            <div className="footer-content max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xs">UF</span>
                            <h3 className="text-white font-bold text-base tracking-tight">UniFab</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">Professional 3D printing and prototyping services for USTP students and researchers. Fast, affordable, and reliable.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors duration-150">About the Lab</Link></li>
                            <li><Link to="#services-grid" className="hover:text-white transition-colors duration-150">Services</Link></li>
                            <li><Link to="/database" className="hover:text-white transition-colors duration-150">Design Database</Link></li>
                            <li><Link to="/faq" className="hover:text-white transition-colors duration-150">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact</h4>
                        <address className="text-gray-500 not-italic text-sm space-y-2">
                            <p>USTP–CDO Fabrication Laboratory</p>
                            <p>Cagayan de Oro City, Philippines</p>
                            <Link to="mailto:fablab@ustp.edu.ph" className="hover:text-white transition-colors duration-150 inline-block mt-1">fablab@ustp.edu.ph</Link>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-600 text-sm">&copy; 2024 USTP-CDO Fabrication Laboratory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}