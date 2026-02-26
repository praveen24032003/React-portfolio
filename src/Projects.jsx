import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

// Import images
import arunImg from "./assets/arun-portfolio.png";
import renukaImg from "./assets/renuka-portfolio.png";
import idlyAppImg from "./assets/idly-app.jpeg";
import idlyWebImg from "./assets/idly-web.png";
import dairyImg from "./assets/dairy-app.jpeg";
import agribotImg from "./assets/Agribot_Project.png";
import aiVoiceImg from "./assets/Pranu_AI-Assistance.png";
import praveenPortfolioImg from "./assets/praveen portfolio.png";
import idlyOrderImg from "./assets/idly express website 2.png";
import clientPortfolioImg from "./assets/Screenshot 2026-02-26 084837.png";
import vjStudioImg from "./assets/Screenshot 2026-02-26 081919.png";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // --- Live Demo Projects (non-portfolio) ---
        {
            id: 1,
            title: "VJ Studio — Photography Platform",
            category: "client",
            image: vjStudioImg,
            tech: ["React 19", "Vite", "Context API", "CSS"],
            description: "A full-stack-styled, serverless e-commerce web app built for a professional photography studio in Erode, Tamil Nadu — enabling camera rentals, equipment sales, and photoshoot bookings with a smart WhatsApp-based checkout flow. Features multi-service cart system, zero-backend architecture, and mobile-first design for 90%+ mobile users.",
            link: "https://vj-studio.vercel.app/",
            git: "#",
            type: "Web"
        },
        {
            id: 2,
            title: "Idly Express Website",
            category: "business",
            image: idlyWebImg,
            tech: ["HTML", "CSS", "Tailwind"],
            description: "Official brand website for Idly Express. SEO-optimized, responsive, and designed to convert visitors into customers.",
            link: "https://idlyexpress.vercel.app/",
            git: "#",
            type: "Web"
        },
        {
            id: 3,
            title: "Idly Express Ordering System",
            category: "business",
            image: idlyOrderImg,
            tech: ["React", "Node.js", "MongoDB"],
            description: "Online ordering platform for Idly Express enabling customers to browse menu and place orders.",
            link: "https://idly-express.vercel.app/",
            git: "#",
            type: "Web"
        },
        // --- Live Demo Projects (portfolios) ---
        {
            id: 4,
            title: "Client Portfolio Website",
            category: "client",
            image: clientPortfolioImg,
            tech: ["React", "Tailwind CSS"],
            description: "Designed and developed a mobile-first, fully responsive professional portfolio website for a client. Features clean UI with strong visual hierarchy, reusable components, resume download integration, and direct LinkedIn access — optimized for recruiter scanning and cross-device compatibility.",
            link: "https://vigneshportfolio-nu.vercel.app/",
            git: "#",
            type: "Web"
        },
        {
            id: 5,
            title: "Arun's Portfolio",
            category: "client",
            image: arunImg,
            tech: ["React", "CSS"],
            description: "Professional portfolio developed for a client to showcase their design work. Focus on minimal aesthetics.",
            link: "https://arunprotfolio.vercel.app/",
            git: "#",
            type: "Web"
        },
        {
            id: 6,
            title: "Renuka's Portfolio",
            category: "client",
            image: renukaImg,
            tech: ["React", "Framer Motion"],
            description: "Interactive personal website built for a client. Features smooth animations and a dark mode design.",
            link: "https://renukasri.vercel.app/",
            git: "#",
            type: "Web"
        },
        {
            id: 7,
            title: "Praveen Portfolio",
            category: "business",
            image: praveenPortfolioImg,
            tech: ["React", "Tailwind"],
            description: "My personal portfolio showcasing my skills and projects.",
            link: "https://praveenportfolio-two.vercel.app/",
            git: "#",
            type: "Web"
        },
        // --- Projects without Live Demo ---
        {
            id: 8,
            title: "Idly Express Sales App",
            category: "business",
            image: idlyAppImg,
            tech: ["Flutter", "Firebase", "Dart"],
            description: "A comprehensive sales management solution for a food business. Tracks daily/monthly sales, manages wholesale/retail pricing, and calculates real-time profits.",
            link: "#",
            git: "https://github.com/praveen24032003/sales-management-app-for-Idly-Express",
            type: "App"
        },
        {
            id: 9,
            title: "Dairy Farm Management",
            category: "client",
            image: dairyImg,
            tech: ["Flutter", "Firebase"],
            description: "Mobile application for managing dairy farm operations, cattle health tracking, and milk production analytics.",
            link: "#",
            git: "#",
            type: "App"
        },
        {
            id: 10,
            title: "Agribot Project",
            category: "client",
            image: agribotImg,
            tech: ["IoT", "Python", "Robotics"],
            description: "An automated agricultural robot designed to assist in farming tasks and improve efficiency in the field.",
            link: "#",
            git: "https://github.com/praveen24032003/agri-bot",
            type: "IoT"
        },
        {
            id: 11,
            title: "AI Voice Assistance",
            category: "client",
            image: aiVoiceImg,
            tech: ["Python", "AI", "NLP"],
            description: "An advanced AI-powered voice assistant capable of performing various tasks and interactions via voice commands.",
            link: "#",
            git: "https://github.com/praveen24032003/AI-Voice-assistance--Pranu",
            type: "AI"
        }
    ];

    const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="section-padding bg-dark-900 relative">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Projects</h2>
                    <p className="text-light-300">Case studies of client work and in-house business solutions.</p>

                    <div className="flex justify-center mt-8 space-x-4">
                        {['all', 'business', 'client'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full capitalize transition-colors ${activeTab === tab
                                    ? "bg-primary text-white"
                                    : "bg-dark-800 text-light-300 hover:bg-dark-700"
                                    }`}
                            >
                                {tab === 'business' ? 'In-House' : tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
                                <span className="absolute top-4 right-4 bg-dark-900/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-white border border-white/10">
                                    {project.type}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-light-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    {project.link !== "#" ? (
                                        <span className="flex items-center text-sm font-medium text-white hover:text-primary transition-colors">
                                            <FaExternalLinkAlt className="mr-2" /> Live Demo
                                        </span>
                                    ) : (
                                        <span className="text-sm text-light-300 italic">View Details</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-dark-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="h-64 md:h-full min-h-[300px] relative">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                                </div>

                                <div className="p-8 flex flex-col justify-center">
                                    <span className="text-primary text-sm font-bold tracking-wider mb-2 uppercase">
                                        {selectedProject.type}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                    <p className="text-light-300 mb-6 leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="text-sm bg-dark-700 text-primary px-3 py-1.5 rounded-md border border-primary/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {selectedProject.link !== "#" && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                        )}
                                        {selectedProject.git && selectedProject.git !== "#" && (
                                            <a
                                                href={selectedProject.git}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-dark-700 hover:bg-dark-600 text-white text-center py-3 rounded-xl font-bold transition-all border border-white/10 flex items-center justify-center gap-2"
                                            >
                                                <FaGithub size={20} /> Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
