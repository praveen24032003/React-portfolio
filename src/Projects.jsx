import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaAndroid } from "react-icons/fa";

// Import images
import arunImg from "./assets/arun-portfolio.png";
import renukaImg from "./assets/renuka-portfolio.png";
import idlyAppImg from "./assets/idly-app.jpeg";
import idlyWebImg from "./assets/idly-web.png";
import dairyImg from "./assets/dairy-app.jpeg";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Idly Express Sales App",
            category: "business",
            image: idlyAppImg,
            tech: ["Flutter", "Firebase", "Dart"],
            description: "A comprehensive sales management solution for a food business. Tracks daily/monthly sales, manages wholesale/retail pricing, and calculates real-time profits.",
            link: "#",
            type: "App"
        },
        {
            id: 2,
            title: "Idly Express Website",
            category: "business",
            image: idlyWebImg,
            tech: ["HTML", "CSS", "Tailwind"],
            description: "Official brand website for Idly Express. SEO-optimized, responsive, and designed to convert visitors into customers.",
            link: "https://idlyexpress.vercel.app/",
            type: "Web"
        },
        {
            id: 3,
            title: "Dairy Farm Management",
            category: "business",
            image: dairyImg,
            tech: ["Flutter", "Firebase"],
            description: "Mobile application for managing dairy farm operations, cattle health tracking, and milk production analytics.",
            link: "#",
            type: "App"
        },
        {
            id: 4,
            title: "Arun's Portfolio",
            category: "client",
            image: arunImg,
            tech: ["React", "CSS"],
            description: "Professional portfolio developed for a client to showcase their design work. Focus on minimal aesthetics.",
            link: "https://arunprotfolio.vercel.app/",
            type: "Web"
        },
        {
            id: 5,
            title: "Renuka's Portfolio",
            category: "client",
            image: renukaImg,
            tech: ["React", "Framer Motion"],
            description: "Interactive personal website built for a client. Features smooth animations and a dark mode design.",
            link: "https://renukasri.vercel.app/",
            type: "Web"
        },
    ];

    const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="section-padding bg-dark-900">
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
                            className="group bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
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
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-white hover:text-primary transition-colors"
                                        >
                                            <FaExternalLinkAlt className="mr-2" /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="text-sm text-light-300 italic">Internal App</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
