import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSchemeById } from "../../../services/schemes/schemeService";

const SchemeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scheme, setScheme] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchemeDetails = async () => {
            try {
                const data = await getSchemeById(id);
                setScheme(data);
            } catch (err) {
                setError("Failed to fetch scheme details");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSchemeDetails();
    }, [id]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;
    if (!scheme) return <div className="p-4">Scheme not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button 
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
                ← Back
            </button>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{scheme.title}</h1>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Objective</h2>
                    <p className="text-gray-700">{scheme.objective}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5">
                        {scheme.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-gray-700 mb-1">{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
                    {scheme.howToApply.online && (
                        <div className="mb-2">
                            <h3 className="font-medium">Online:</h3>
                            <p className="text-gray-700">{scheme.howToApply.online}</p>
                        </div>
                    )}
                    {scheme.howToApply.offline && (
                        <div>
                            <h3 className="font-medium">Offline:</h3>
                            <p className="text-gray-700">{scheme.howToApply.offline}</p>
                        </div>
                    )}
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Required Documents</h2>
                    <ul className="list-disc pl-5">
                        {scheme.documentsRequired.map((doc, index) => (
                            <li key={index} className="text-gray-700 mb-1">{doc}</li>
                        ))}
                    </ul>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Categories</h2>
                        <div className="flex flex-wrap gap-2">
                            {scheme.category.incomeGroup.map((group, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                    {group}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
                        <p className="text-gray-700">Ministry: {scheme.ministry}</p>
                        <p className="text-gray-700">Level: {scheme.level}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SchemeDetails;
