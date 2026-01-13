import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaBug, FaChartBar, FaLaptopCode } from "react-icons/fa";
import { SiFlutter, SiJavascript, SiMysql, SiFirebase, SiOracle } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";

const Skills = () => {

    const skillCategories = [
        {
            title: "Development",
            skills: [
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "React JS", icon: <FaReact className="text-blue-400" /> },
                { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
                { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
                { name: "Eclipse", icon: <FaLaptopCode className="text-purple-600" /> },
                { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
            ]
        },
        {
            title: "Professional",
            skills: [
                { name: "Requirement Analysis", icon: <BiTask className="text-green-400" /> },
                { name: "Client Communication", icon: <BiTask className="text-green-400" /> },
                { name: "Support & Fixes", icon: <FaBug className="text-red-400" /> },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section-padding bg-dark-800/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-light-300">My toolset for building robust applications.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-dark-900 border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="flex items-center space-x-3 group">
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                                        <span className="text-light-200 group-hover:text-white transition-colors">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
