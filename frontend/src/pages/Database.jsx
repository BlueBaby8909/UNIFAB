import {Link} from "react-router-dom";

export default function Database() {
    return(
        <main className="eyebrow">
            <section className="database-hero bg-white border-b border-gray-100 p-5">
                <div className="database-hero-content max-w-7xl mx-auto">
                    <span className="section-eyebrow inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                        ◈ Design Library
                    </span>
                    <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Browse 3D Designs</h3>
                    <p className="text-gray-500 text-base max-w-xl leading-relaxed">
                        Explore our curated library of verified, printable 3D models. Select a design and submit a print request instantly.
                    </p>
                </div>
            </section>

            <section className="database-section p-5">
                <div className="database-container max-w-7xl mx-auto">

                    <div className="search-filter-bar bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row gap-3 shadow-sm mb-5">

                        <div className="search-wrapper flex-1">
                            <div className="search flex w-full border items-center gap-2 rounded-xl bg-gray-50 border-gray-200 px-3 py-2.5">
                                <span className="material-symbols-outlined text-gray-400">search</span>
                                <input type="search" placeholder="Search designs..."
                                    className="w-full bg-transparent text-sm text-gray-400 border-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none appearance-none cursor-not-allowed"/>
                            </div>
                        </div>

                        <div className="hidden sm:block w-px bg-gray-200 self-stretch"></div>

                        <div className="filter-group flex flex-wrap gap-3 items-center">

                            <div className="flex flex-col gap-1">
                                <label htmlFor="filter-category" className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Category</label>
                                <select id="filter-category" name="category"
                                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-gray-400 focus:outline-none cursor-not-allowed min-w-32">
                                    <option value="">All</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="art">Art &amp; Decor</option>
                                    <option value="tools">Tools &amp; Parts</option>
                                    <option value="education">Education</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="filter-material" className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Material</label>
                                <select id="filter-material" name="material"
                                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-gray-400 focus:outline-none cursor-not-allowed min-w-28">
                                    <option value="">All</option>
                                    <option value="pla">PLA</option>
                                    <option value="abs">ABS</option>
                                    <option value="petg">PETG</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="results-meta flex items-center justify-between my-5">
                        <p className="results-count text-sm text-gray-500 font-medium">
                            Showing <span className="text-gray-900 font-bold">0</span> designs
                        </p>
                        <div className="sort-wrapper flex items-center gap-2">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider hidden sm:block">Sort:</span>
                            <select id="sort-by" name="sort"
                                className="px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm text-gray-400 focus:outline-none cursor-not-allowed">
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest</option>
                                <option value="name">A–Z</option>
                            </select>
                        </div>
                    </div>

                    <div className="empty-state-banner bg-white border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                        <div className="text-center sm:text-left flex-1">
                            <h3 className="text-base font-bold text-gray-900 mb-1 tracking-tight">No Designs Available Yet</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                The design library is being set up. Verified 3D models will appear here once the database is connected to the backend.
                            </p>
                        </div>
                        <Link to="/request-designer"
                            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-6 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                            Request a Designer →
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    )
}