const ServiceAreas = () => {
    const areas = [
        "Newport",
        "Middletown",
        "Portsmouth",
        "Jamestown",
        "Narragansett",
        "Bristol",
        "Tiverton",
        "Little Compton"
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Serving Newport & Rhode Island
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Professional private chef services throughout Newport County and surrounding Rhode Island communities
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {areas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                            >
                                <p className="text-gray-800 font-semibold">{area}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600">
                        Not in these areas? Contact me to discuss service availability for your location.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
