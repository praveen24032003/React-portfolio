import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaPython, FaDatabase } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import profileImg from "./assets/praveen photo.png";
import resume from "./assets/Praveen CV Dec-2025.pdf";

// Tech Images
import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import jsImg from "./assets/javascript.png";
import reactImg from "./assets/react.png";
import figmaImg from "./assets/figma.png";
import bootstrapImg from "./assets/bootstrap.png";
import javaImg from "./assets/java.png";
import nodeImg from "./assets/node js.png";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0 bg-dark-900">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-52 h-52 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="container-custom flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* ---- MOBILE: Profile Image FIRST (above text) ---- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center items-center z-10 lg:hidden"
                >
                    <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
                        {/* Background Splat */}
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />

                        {/* Orbiting Ring – single subtle ring on mobile */}
                        <div className="absolute w-[115%] h-[115%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Central Profile Image */}
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-br from-primary via-secondary to-primary animate-pulse z-10">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-900 relative">
                                <img
                                    src={profileImg}
                                    alt="Praveen M"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </div>
                        </div>

                        {/* Mobile: Only show 4 floating icons, tightly positioned */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 right-4 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={reactImg} alt="React" className="w-7 h-7 object-contain" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-0 -right-2 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={nodeImg} alt="Node" className="w-7 h-7 object-contain" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-2 left-6 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <SiFlutter className="text-xl text-[#02569B]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute top-4 -left-4 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <FaPython className="text-xl text-[#3776AB]" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* ---- Text Content ---- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left z-20"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide">
                        FREELANCE FULL STACK DEV
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 text-light-100">
                        Hi, I'm <span className="text-primary font-bold">Praveen M</span>
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">scalable</span> applications.
                    </h1>
                    <p className="text-light-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                        I help businesses and startups launch high-quality web and mobile solutions using React, Flutter, and Modern Tech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="btn btn-primary cursor-pointer">
                            View Projects
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70} className="btn btn-outline cursor-pointer">
                            Hire Me
                        </Link>
                        <a href={resume} download="Praveen_Resume.pdf" className="btn btn-outline cursor-pointer flex items-center justify-center gap-2">
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* ---- DESKTOP: Right Visual (hidden on mobile) ---- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex justify-center lg:justify-end items-center z-10"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                        {/* Background Splat */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

                        {/* Orbiting Icons Rings (Visual only) */}
                        <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                        <div className="absolute w-[170%] h-[170%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />

                        {/* Central Profile Image */}
                        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-br from-primary via-secondary to-primary animate-pulse z-10">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-900 relative">
                                <img
                                    src={profileImg}
                                    alt="Praveen M"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </div>
                        </div>

                        {/* --- Floating Icons Cloud --- */}

                        {/* React */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 right-4 p-3 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={reactImg} alt="React" className="w-10 h-10 object-contain" />
                        </motion.div>

                        {/* Node */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-0 -right-8 p-3 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={nodeImg} alt="Node" className="w-10 h-10 object-contain" />
                        </motion.div>

                        {/* Flutter */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-8 left-10 p-3 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <SiFlutter className="text-3xl text-[#02569B]" />
                        </motion.div>

                        {/* Python */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute top-10 -left-12 p-3 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <FaPython className="text-3xl text-[#3776AB]" />
                        </motion.div>

                        {/* JS */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -top-2 -left-2 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={jsImg} alt="JS" className="w-8 h-8 object-contain" />
                        </motion.div>

                        {/* HTML */}
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="absolute top-1/2 -left-20 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={htmlImg} alt="HTML" className="w-8 h-8 object-contain" />
                        </motion.div>

                        {/* CSS */}
                        <motion.div
                            animate={{ x: [0, -10, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                            className="absolute top-1/3 -right-16 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={cssImg} alt="CSS" className="w-8 h-8 object-contain" />
                        </motion.div>

                        {/* Java */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                            className="absolute -bottom-12 right-20 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg"
                        >
                            <img src={javaImg} alt="Java" className="w-9 h-9 object-contain" />
                        </motion.div>

                        {/* Figma */}
                        <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-20 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg z-0 opacity-80"
                        >
                            <img src={figmaImg} alt="Figma" className="w-6 h-6 object-contain" />
                        </motion.div>

                        {/* Bootstrap */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                            className="absolute bottom-20 -left-10 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 shadow-lg z-0 opacity-80"
                        >
                            <img src={bootstrapImg} alt="Bootstrap" className="w-7 h-7 object-contain" />
                        </motion.div>

                        {/* Database */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 p-2 rounded-lg bg-dark-800/80 backdrop-blur-sm border border-white/10 z-0 opacity-90"
                        >
                            <FaDatabase className="text-xl text-purple-400" />
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
