import { useState } from 'react';

const SchemeSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        tags: '',
        gender: '',
        age: '',
        incomeGroup: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);
    };

    return (
        <div className="p-8 neu-card">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <select
                        name="tags"
                        value={filters.tags}
                        onChange={handleFilterChange}
                        className="neu-input p-3 w-full">
                        <option value="">Select Category</option>
                        <option value="education">Education</option>
                        <option value="health">Healthcare</option>
                        <option value="agriculture">Agriculture</option>
                    </select>

                    <select
                        name="gender"
                        value={filters.gender}
                        onChange={handleFilterChange}
                        className="neu-input p-3 w-full">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <select
                        name="age"
                        value={filters.age}
                        onChange={handleFilterChange}
                        className="neu-input p-3 w-full">
                        <option value="">Select Age Group</option>
                        <option value="18">18+ years</option>
                        <option value="30">30+ years</option>
                        <option value="60">60+ years</option>
                        <option value="all">All Ages</option>
                    </select>

                    <select
                        name="incomeGroup"
                        value={filters.incomeGroup}
                        onChange={handleFilterChange}
                        className="neu-input p-3 w-full">
                        <option value="">Select Income Group</option>
                        <option value="EWS">EWS</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="neu-button px-8 py-4 text-xl font-bold w-full md:w-auto">
                    Search Schemes
                </button>
            </form>
        </div>
    );
};

export default SchemeSearch;
