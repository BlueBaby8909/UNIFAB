import Footer from "../components/layout/Footer";

export default function Upload() {
    return(
        <main className="flex-grow pt-10 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10">
                    <span className="section-eyebrow inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                        &#9651; Upload &amp; Configure
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Upload Your 3D File</h1>
                    <p className="text-gray-500 text-base max-w-2xl leading-relaxed">Upload your 3D models (STL, OBJ, STEP) and configure your print settings to get an instant quote and start fabrication.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-6">

                        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                                <h2 className="text-lg font-bold text-gray-900">Upload File</h2>
                            </div>

                            <div id="drop-zone" className="border-2 border-dashed border-blue-200 bg-blue-50/30 rounded-2xl p-10 text-center hover:bg-blue-50 transition-colors duration-300 cursor-pointer relative">
                                <input type="file" id="file-upload" name="file-upload" accept=".stl,.obj,.step"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"/>

                                <div id="upload-content">
                                    <svg className="w-14 h-14 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <h3 className="text-base font-bold text-gray-800 mb-1">Drag &amp; Drop your 3D file here</h3>
                                    <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>
                                    <span className="inline-flex items-center bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:border-blue-300 transition-colors">
                                        Browse Files
                                    </span>
                                </div>

                                <div id="file-selected" className="hidden flex-col items-center justify-center">
                                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                    </div>
                                    <h3 id="filename-display" className="text-base font-bold text-gray-900 mb-1">filename.stl</h3>
                                    <p id="filesize-display" className="text-sm text-gray-500 mb-4">0 MB</p>
                                    <button type="button" id="remove-file"
                                        className="text-sm text-red-500 hover:text-red-600 font-medium z-20 relative transition-colors">
                                        Remove file
                                    </button>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 mt-4 flex items-center gap-2">
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Max file size: 50MB &nbsp;&middot;&nbsp; Accepted formats: .STL, .OBJ, .STEP
                            </p>
                        </section>

                        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm opacity-50 pointer-events-none transition-opacity duration-300" id="settings-section">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-5">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                                <h2 className="text-lg font-bold text-gray-900">Print Settings</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="field-group flex flex-col gap-1.5">
                                        <label htmlFor="material" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Material</label>
                                        <select id="material" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 bg-white text-sm text-gray-800 transition-colors">
                                            <option value="pla" data-price="1.0">PLA (Standard) &mdash; Cost Effective</option>
                                            <option value="abs" data-price="1.5">ABS (Durable) &mdash; High Impact</option>
                                            <option value="petg" data-price="1.3">PETG (Flexible) &mdash; Heat Resistant</option>
                                            <option value="tpu" data-price="2.0">TPU (Rubber-like) &mdash; Ultra Flexible</option>
                                        </select>
                                    </div>
                                    <div className="field-group flex flex-col gap-1.5">
                                        <label htmlFor="color" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Color</label>
                                        <select id="color" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 bg-white text-sm text-gray-800 transition-colors">
                                            <option value="white">White</option>
                                            <option value="black">Black</option>
                                            <option value="grey">Grey</option>
                                            <option value="blue">UniFab Blue</option>
                                            <option value="red">Industrial Red</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">Resolution (Layer Height)</label>
                                    <div className="grid grid-cols-3 gap-4">

                                        <label className="cursor-pointer">
                                            <input type="radio" name="quality" value="0.3" data-price="0.8" className="radio-card-input hidden"/>
                                            <div className="radio-card p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors h-full">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-gray-900 text-sm">Draft</span>
                                                    <svg className="w-5 h-5 text-gray-300 radio-icon transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-xs text-gray-500 leading-relaxed">0.3mm layer. Fastest print, visible lines.</p>
                                            </div>
                                        </label>

                                        <label className="cursor-pointer">
                                            <input type="radio" name="quality" value="0.2" data-price="1.0" className="radio-card-input hidden" checked/>
                                            <div className="radio-card p-4 border border-blue-600 bg-blue-50 rounded-xl h-full shadow-[0_0_0_1px_#2563eb]">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-gray-900 text-sm">Standard</span>
                                                    <svg className="w-5 h-5 text-blue-600 radio-icon" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-xs text-gray-500 leading-relaxed">0.2mm layer. Best balance of speed &amp; quality.</p>
                                            </div>
                                        </label>

                                        <label className="cursor-pointer">
                                            <input type="radio" name="quality" value="0.1" data-price="1.5" className="radio-card-input hidden"/>
                                            <div className="radio-card p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors h-full">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-bold text-gray-900 text-sm">High Detail</span>
                                                    <svg className="w-5 h-5 text-gray-300 radio-icon transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-xs text-gray-500 leading-relaxed">0.1mm layer. Smoothest surface finish.</p>
                                            </div>
                                        </label>

                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="field-group flex flex-col gap-1.5">
                                        <label htmlFor="infill" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Infill Density</label>
                                        <div className="flex items-center gap-4">
                                            <input type="range" id="infill" min="10" max="100" step="10" value="20"
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"/>
                                            <span id="infill-value" className="w-14 text-center font-bold text-gray-900 bg-gray-100 py-1.5 rounded-lg text-sm shrink-0">20%</span>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">Higher density increases strength and weight.</p>
                                    </div>

                                    <div className="field-group flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</label>
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-32 shadow-sm">
                                            <button type="button" id="qty-minus"
                                                className="px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors text-sm">&#8722;</button>
                                            <input type="number" id="quantity" value="1" min="1" max="50"
                                                className="w-full text-center py-2.5 focus:outline-none font-bold text-gray-900 text-sm border-x border-gray-200"/>
                                            <button type="button" id="qty-plus"
                                                className="px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors text-sm">&#43;</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-24 overflow-hidden">
                            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>

                            <div className="p-6">
                                <h3 className="text-base font-bold text-gray-900 mb-5 tracking-tight">Order Summary</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="text-sm text-gray-500 shrink-0">File</span>
                                        <span id="summary-file" className="text-sm font-semibold text-gray-900 text-right truncate">None selected</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Material</span>
                                        <span id="summary-material" className="text-sm font-semibold text-gray-900">PLA</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Resolution</span>
                                        <span id="summary-resolution" className="text-sm font-semibold text-gray-900">Standard (0.2mm)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Infill</span>
                                        <span id="summary-infill" className="text-sm font-semibold text-gray-900">20%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Quantity</span>
                                        <span id="summary-qty" className="text-sm font-semibold text-gray-900">1x</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-5 mb-5">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-sm font-bold text-gray-900">Estimated Total</span>
                                        <span className="text-3xl font-extrabold text-blue-600 leading-none">&#8369;<span id="price-total">0.00</span></span>
                                    </div>
                                    <p className="text-xs text-gray-400 text-right mt-1">Tax included &middot; Final price may vary.</p>
                                </div>

                                <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 mb-5 flex gap-3">
                                    <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-900 mb-0.5">Estimated Turnaround</p>
                                        <p id="turnaround-time" className="text-xs text-gray-500">Please upload a file first.</p>
                                    </div>
                                </div>

                                <button id="submit-btn" disabled
                                    className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200 font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-blue-200 text-sm hover:-translate-y-0.5 hover:shadow-lg mb-3">
                                    Proceed to Checkout &#8594;
                                </button>
                                <p className="text-xs text-center text-gray-400">Lab staff will review your file before printing.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}