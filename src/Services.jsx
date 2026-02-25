import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer, FaBug, FaCheckCircle, FaRocket, FaClock, FaHeadset } from "react-icons/fa";

const Services = () => {

    const services = [
        {
            title: "Web App Development",
            desc: "Custom, scalable web applications using React and modern frameworks.",
            icon: <FaCode />
        },
        {
            title: "Mobile App Development",
            desc: "Cross-platform mobile apps for iOS and Android using Flutter.",
            icon: <FaMobileAlt />
        },
        {
            title: "Full Stack Integration",
            desc: "End-to-end development with Firebase or SQL backends.",
            icon: <FaServer />
        },
        {
            title: "Maintenance & Support",
            desc: "Bug fixing, performance optimization, and long-term support.",
            icon: <FaBug />
        }
    ];

    const whyMe = [
        { title: "Clean & Scalable Code", icon: <FaCheckCircle /> },
        { title: "Real-World Experience", icon: <FaRocket /> },
        { title: "On-Time Delivery", icon: <FaClock /> },
        { title: "Post-Delivery Support", icon: <FaHeadset /> },
    ];

    return (
        <section id="services" className="section-padding bg-dark-900 relative">
            <div className="container-custom">

                {/* Services */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
                    <p className="text-light-300">High-quality solutions tailored to your business needs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 md:mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-6 bg-dark-800 rounded-xl border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-light-300 text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Me */}
                <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose Me?</h2>
                            <p className="text-light-200 mb-6">
                                I don't just deliver code; I deliver peace of mind. My approach is rooted in transparency, quality, and a deep understanding of business goals.
                            </p>
                            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {whyMe.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <span className="text-secondary text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
