import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                        FREELANCE FULL STACK DEV
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-light-100">
                        Hi, I'm <span className="text-primary font-bold">Praveen M</span>
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">scalable</span> applications.
                    </h1>
                    <p className="text-light-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                        I help businesses and startups launch high-quality web and mobile solutions using React, Flutter, and Modern Tech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="btn btn-primary cursor-pointer">
                            View Projects
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-outline cursor-pointer">
                            Hire Me
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Abstract Tech Visual using CSS/Divs since we await specific 3D assets */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl opacity-20 rotate-6 transform transition-transform animate-pulse" />
                        <div className="absolute inset-0 bg-dark-800 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 backdrop-blur-sm hover:-rotate-2 transition-transform duration-500">
                            {/* Icon / Code visual */}
                            <div className="text-left w-full space-y-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="h-2 w-3/4 bg-gray-700 rounded animate-pulse" />
                                <div className="h-2 w-1/2 bg-gray-700 rounded animate-pulse" />
                                <div className="h-2 w-full bg-gray-700 rounded animate-pulse" />
                                <div className="h-2 w-5/6 bg-gray-700 rounded animate-pulse" />
                                <div className="mt-8 p-4 bg-dark-900/50 rounded-lg border border-primary/20">
                                    <p className="font-mono text-xs text-primary">
                                        &lt;Developer status="Online" /&gt;
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-dark-800 p-3 rounded-lg border border-white/10 shadow-lg animate-bounce duration-[3000ms]">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-dark-800 p-3 rounded-lg border border-white/10 shadow-lg animate-bounce duration-[4000ms]">
                            <span className="text-sm font-bold text-secondary">Flutter & React</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
