import React from "react";

function Technologies() {
    const tech = ["React", "Node.js", "AWS", "Docker", "Figma", "Python"];
    return (
        <section className="bg-blue-900 py-20 text-white text-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/tech-bg.jpg")' }}>
            <div className="max-w-5xl mx-auto px-4">
                <h4 className="text-green-400 text-sm font-semibold mb-2">TECHNOLOGIES</h4>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Technologies We Use</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {tech.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-blue-900 font-semibold py-2 px-4 rounded shadow-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
