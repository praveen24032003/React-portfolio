import { useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {

    const handleWhatsApp = () => {
        window.open("https://wa.me/919345756552", "_blank");
    };

    return (
        <footer id="contact" className="bg-dark-800 pt-20 pb-10 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's build something <span className="text-primary">amazing</span> together.</h2>
                        <p className="text-light-300 text-lg mb-8">
                            Have a project in mind? Looking for a reliable freelancer? Drop me a message and let's discuss how I can help your business grow.
                        </p>

                        <div className="space-y-4 mb-8">
                            <a href="mailto:praveenmanickam823@gmail.com" aria-label="Email Me" className="flex items-center space-x-3 text-base sm:text-lg md:text-xl hover:text-primary transition-colors break-all sm:break-normal">
                                <FaEnvelope className="shrink-0" />
                                <span>praveenmanickam823@gmail.com</span>
                            </a>
                            <button onClick={handleWhatsApp} aria-label="Chat on WhatsApp" className="flex items-center space-x-3 text-xl hover:text-green-500 transition-colors">
                                <FaWhatsapp />
                                <span>+91 93457 56552</span>
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/praveen-m-658b1a289" target="_blank" aria-label="LinkedIn" className="p-3 bg-dark-700 rounded-full hover:bg-primary transition-colors"><FaLinkedin size={20} /></a>
                            <a href="https://github.com/praveen24032003" target="_blank" aria-label="GitHub" className="p-3 bg-dark-700 rounded-full hover:bg-white hover:text-black transition-colors"><FaGithub size={20} /></a>
                            <a href="https://www.instagram.com/praveen.ceo_/" target="_blank" aria-label="Instagram" className="p-3 bg-dark-700 rounded-full hover:bg-pink-600 transition-colors"><FaInstagram size={20} /></a>
                        </div>
                    </div>

                    {/* Simple Form Visual */}
                    <div className="bg-dark-900 p-5 sm:p-8 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form className="space-y-4" action="https://formsubmit.co/praveenmanickam823@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Your Name" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" required />
                            <input type="email" name="email" placeholder="Your Email" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" required />
                            <textarea name="message" rows="4" placeholder="Tell me about your project" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" required></textarea>
                            <button type="submit" className="w-full btn btn-primary">Send Message</button>
                        </form>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-8 text-center text-light-300">
                    <p>© 2026 Praveen M. All rights reserved.</p>
                    <p className="text-sm mt-2 opacity-50">"Ideas spark innovation, but code transforms them into reality."</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
