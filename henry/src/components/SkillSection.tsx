import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa6";
import { FaDatabase, FaCloud } from "react-icons/fa";

export default function SkillSection() {
    
    const skills = [
        {
        icon: <FaCode className="w-8 h-8 mb-4 text-indigo-500" />,
        title: "Frontend Development",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
        },
        {
        icon: <FaDatabase className="w-8 h-8 mb-4 text-indigo-500" />,
        title: "Backend Development",
        items: ["Node.js", "Python", "PostgreSQL", "MySQL"]
        },
        {
        icon: <FaCloud className="w-8 h-8 mb-4 text-indigo-500" />,
        title: "Cloud & Blockchain",
        items: ["Firebase", "Motoko", "Rust", "Git"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
                Skills & Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
                    >
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                    <ul className="space-y-2">
                        {skill.items.map((item, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * idx }}
                            className="text-gray-400 flex items-center"
                        >
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                            {item}
                        </motion.li>
                        ))}
                    </ul>
                    </motion.div>
                ))}
                </div>
            </motion.div>
        </section>
    );
}
