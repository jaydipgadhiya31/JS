import React from "react";

function Stats() {
    const data = [
        { label: "Clients", value: "120+" },
        { label: "Projects", value: "340+" },
        { label: "Team Members", value: "50+" },
        { label: "Years Experience", value: "10+" },
    ];

    return (
        <section className="bg-blue-50 py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {data.map((stat, idx) => (
                    <div key={idx}>
                        <h3 className="text-3xl font-bold text-blue-800">{stat.value}</h3>
                        <p className="text-sm font-medium text-gray-600 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;

