import {Link} from "react-router-dom";

export default function RequestDesigner() {
    return (
        <main>
            <section className="eyebrow request-section min-h-screen bg-gray-50 px-4 py-12">
                <div className="request-container max-w-2xl mx-auto">
                    <div className="page-header mb-10">
                        <span className="section-eyebrow inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                            ✦ Custom Design Request
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                            Request a Designer
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Fill out the form below and our designers will get back to you with a quote.
                        </p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data" className="request-form">
                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">01 — Your Information</h2>
                            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="field-group flex flex-col gap-1.5 mb-5">
                                    <label htmlFor="full-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                                    <input type="text" id="full-name" name="full_name" placeholder="Juan Dela Cruz" required
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                                <div className="field-group flex flex-col gap-1.5 mb-5">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="juan@ustp.edu.ph" required
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">02 — Object Details</h2>
                            <div className="field-group flex flex-col gap-1.5 mb-5">
                                <label htmlFor="object-name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Object Name</label>
                                <input type="text" id="object-name" name="object_name" placeholder="e.g. Custom Gear Bracket" required
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                            </div>
                            <div className="field-group flex flex-col gap-1.5 mb-5">
                                <label htmlFor="description" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Object Description</label>
                                <textarea id="description" name="description" rows="4" placeholder="Describe your object in detail. Include its purpose, any specific features, and how it will be used." required
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200 resize-none leading-relaxed"></textarea>
                            </div>
                            <div className="field-group flex flex-col gap-1.5 mb-5">
                                <label htmlFor="intended-use" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Intended Use</label>
                                <select id="intended-use" name="intended_use" required
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200">
                                    <option value="">Select intended use</option>
                                    <option value="prototype">Prototype / Testing</option>
                                    <option value="functional">Functional Part</option>
                                    <option value="display">Display / Decorative</option>
                                    <option value="research">Research</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">03 — Dimensions</h2>
                            <p className="form-section-hint text-sm text-gray-400 leading-relaxed mb-6">Approximate dimensions are fine if exact measurements are not yet available.</p>
                            <div className="dimensions-row grid grid-cols-3 gap-4">
                                <div className="field-group flex flex-col gap-1.5">
                                    <label htmlFor="width" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Width (mm)</label>
                                    <input type="number" id="width" name="width" min="1" placeholder="e.g. 50"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                                <div className="field-group flex flex-col gap-1.5">
                                    <label htmlFor="height" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Height (mm)</label>
                                    <input type="number" id="height" name="height" min="1" placeholder="e.g. 30"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                                <div className="field-group flex flex-col gap-1.5">
                                    <label htmlFor="depth" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Depth (mm)</label>
                                    <input type="number" id="depth" name="depth" min="1" placeholder="e.g. 20"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">04 — Print Preferences</h2>
                            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="field-group flex flex-col gap-1.5 mb-5">
                                    <label htmlFor="material" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Preferred Material</label>
                                    <select id="material" name="material"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200">
                                        <option value="pla">PLA (Standard)</option>
                                        <option value="abs">ABS (Durable)</option>
                                        <option value="petg">PETG (Flexible)</option>
                                        <option value="no-preference">No Preference</option>
                                    </select>
                                </div>
                                <div className="field-group flex flex-col gap-1.5 mb-5">
                                    <label htmlFor="quantity" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</label>
                                    <input type="number" id="quantity" name="quantity" min="1" value="1"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">05 — Reference Files</h2>
                            <p className="form-section-hint text-sm text-gray-400 leading-relaxed mb-6">Upload sketches, photos, or any reference images to help the designer understand your vision. Optional but recommended.</p>
                            <div className="upload-area bg-blue-50/60 border-2 border-dashed border-blue-200 rounded-xl p-5 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200">
                                <label htmlFor="references" className="block text-sm text-gray-700 font-semibold mb-2">Upload References</label>
                                <input type="file" id="references" name="references" accept="image/*,.pdf" multiple
                                    className="w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-xs file:font-semibold file:cursor-pointer hover:file:bg-blue-700 file:transition-colors"/>
                                <small className="block text-gray-400 text-xs mt-2">Accepted: JPG, PNG, PDF · Multiple files allowed</small>
                            </div>
                        </div>

                        <div className="form-section bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
                            <h2 className="form-section-title text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">06 — Additional Notes</h2>
                            <div className="field-group flex flex-col gap-1.5">
                                <label htmlFor="notes" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Anything else we should know?</label>
                                <textarea id="notes" name="notes" rows="3" placeholder="Deadline, special requirements, budget considerations, etc."
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-colors duration-200 resize-none leading-relaxed"></textarea>
                            </div>
                        </div>

                        <div className="form-footer bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                            <p className="form-disclaimer text-sm text-gray-400 mb-4 leading-relaxed">
                                Our team will review your request and contact you within 1–2 business days.
                            </p>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-3.5 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                                Submit Design Request →
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </main>
    )
}