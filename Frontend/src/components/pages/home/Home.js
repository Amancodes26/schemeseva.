import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SchemeSearch from "../../common/SchemeSearch/SchemeSearch";
import { getFilteredSchemes } from "../../../services/schemes/schemeService";
import "../../../styles/neubrutalism.css";

const Home = () => {
    const navigate = useNavigate();
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (filters) => {
        try {
            setLoading(true);
            setError(null);
            const results = await getFilteredSchemes(filters);
            setSchemes(results);
        } catch (err) {
            setError("Failed to fetch schemes. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSchemeClick = (schemeId) => {
        navigate(`/scheme/${schemeId}`);
    };

    return (
        <div className="overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center justify-center bg-violet-200 border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <h1 className="text-7xl font-bold mb-6 neu-card p-8 bg-white space-y-4">
                        <div>Find Your Perfect</div>
                        <div className="highlight-text inline-block">Government Scheme</div>
                    </h1>
                    <p className="text-2xl mb-8 max-w-2xl neu-card p-6 bg-white">
                        Don't miss out on opportunities. Discover schemes tailored for you.
                    </p>
                    <button 
                        onClick={() => document.getElementById('search').scrollIntoView({ behavior: 'smooth' })}
                        className="neu-button px-8 py-4 text-xl font-bold bg-white hover:bg-violet-200"
                    >
                        Explore Schemes →
                    </button>
                </div>
            </section>

            {/* Facts Section */}
            <section className="neu-section mx-4 my-20 max-w-7xl md:mx-auto bg-white">
                <h2 className="text-4xl font-bold mb-8">The Scheme Awareness Crisis</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="neu-card p-8 bg-violet-200">
                        <h3 className="text-3xl font-bold mb-4">Scale</h3>
                        <p className="text-6xl font-bold mb-4">95%</p>
                        <p className="text-xl">of Indians miss out on government schemes they're eligible for</p>
                    </div>
                    <div className="neu-card p-8">
                        <h3 className="text-3xl font-bold mb-4">Impact</h3>
                        <p className="text-xl mb-4">Billions of dollars in government support go unclaimed annually</p>
                        <p className="text-xl">Limited access to essential resources and opportunities</p>
                    </div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="neu-section mx-4 my-20 max-w-7xl md:mx-auto bg-white">
                <h2 className="text-4xl font-bold mb-8">Why This Matters</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Missed Opportunities",
                            description: "Eligible citizens unable to access valuable government support"
                        },
                        {
                            title: "Information Gap",
                            description: "Complex scheme details scattered across multiple sources"
                        },
                        {
                            title: "Resource Barrier",
                            description: "Difficulty in finding schemes matching specific eligibility criteria"
                        }
                    ].map((item, index) => (
                        <div key={index} className="neu-card p-6 bg-violet-100">
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Search Section */}
            <section id="search" className="neu-section mx-4 my-20 max-w-7xl md:mx-auto">
                <h2 className="text-4xl font-bold mb-8">Search Schemes</h2>
                <SchemeSearch onSearch={handleSearch} />

                {loading && <p className="mt-4 text-xl">Loading schemes...</p>}
                {error && <p className="mt-4 text-xl text-red-500 neu-card p-4">{error}</p>}

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schemes.map((scheme) => (
                        <div 
                            key={scheme._id} 
                            className="neu-card p-6 cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform"
                            onClick={() => handleSchemeClick(scheme._id)}
                        >
                            <h2 className="text-xl font-bold mb-2">{scheme.title}</h2>
                            <p className="text-gray-700 mb-4">{scheme.objective}</p>
                            <div className="flex flex-wrap gap-2">
                                {scheme.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-[#FFE872] border-2 border-black rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {schemes.length === 0 && !loading && (
                    <p className="mt-8 text-center text-xl neu-card p-6 inline-block">
                        No schemes found. Try adjusting your search filters.
                    </p>
                )}
            </section>
        </div>
    );
};

export default Home;
