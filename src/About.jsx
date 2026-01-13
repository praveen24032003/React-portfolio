import { motion } from "framer-motion";
import profileImg from "./assets/praveen-passport.jpg";

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark-900 relative">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center md:justify-start"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-primary rounded-2xl transform translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 bg-dark-800 rounded-2xl overflow-hidden glass-card">
                            <img
                                src={profileImg}
                                alt="Praveen M"
                                loading="lazy"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

                    <div className="space-y-6 text-light-200 leading-relaxed">
                        <p className="text-lg">
                            I am <span className="text-primary font-semibold">Praveen M</span>, a Freelance Full Stack & Flutter Developer based in India.
                        </p>
                        <p>
                            I don't just write code; I build <span className="text-white font-medium">real-world solutions</span> for businesses and startups. My focus is on creating scalable, high-performance web and mobile applications that solve actual problems and drive growth.
                        </p>
                        <p>
                            With a strong foundation in <span className="text-secondary">Java, React, and Flutter</span>, I bridge the gap between complex requirements and user-friendly interfaces. Whether you need a cross-platform mobile app or a robust web platform, I deliver production-ready code.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-dark-800 rounded-lg border border-white/5">
                            <h3 className="text-2xl font-bold text-primary mb-1">2+</h3>
                            <p className="text-sm text-light-300">Years Experience</p>
                        </div>
                        <div className="p-4 bg-dark-800 rounded-lg border border-white/5">
                            <h3 className="text-2xl font-bold text-secondary mb-1">10+</h3>
                            <p className="text-sm text-light-300">Projects Delivered</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
