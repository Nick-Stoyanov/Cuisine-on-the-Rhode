const testimonials = [
    {
        quote:
            "Chef Nick made eating at home an event. He not only imagines his culinary delights but then creates them with flare and professionalism.",

    },
    {
        quote:"Best birthday dinner I could ask for. Chef Nick curated multiple courses of meals effortlessly and I was able to experience delicious plates I had never tried before."

    },

];

const TestimonialSection = () => {
    return (
        <section className="bg-white w-full py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-orange-600 font-semibold tracking-wide uppercase">
                       Guest Testimonials
                    </p>
                </div>

                <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <figure
                            key={`${testimonial.name}-${testimonial.date}`}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm h-full"
                        >
                            <blockquote className="text-lg text-gray-800 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>

                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
