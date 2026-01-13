// import { Mail, Github, LinkedIn, Instagram } from 'react-icons/si';
import { Heart, MessageSquare } from 'lucide-react';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PersonalInfo, Social_Links} from '../../utils/constants';
import FadeIn from "../animations/FadeIn";

const Contact = () => {

    const socialIcons = {
        github: FaGithub,
        linkedin: FaLinkedin,
        instagram: FaInstagram,
        email: MdEmail,
    };

    return (
        <section id="Contact" className="relative py-20 bg-primary/2.5 overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/2.5 opacity-10 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/2.5 opacity-30 rounded-full blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
                <FadeIn delay={0}>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-7">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium tracking-wider uppercase">Get In Touch</span>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid gap-4 mb-6">
                    {/* Contact Info */}
                    <FadeIn delay={200}>
                        <div>
                            <div className="flex flex-wrap justify-center items-center gap-3">{Object.entries(Social_Links).map(([platform, url]) => {
                                const Icon = socialIcons[platform];
                                return Icon ? (
                                        <a key={platform} href={url} target='_blank' rel='noopener noreferrer' className='group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300' aria-label={`Connect on ${platform}`}>
                                            <Icon className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors duration-300" />
                                            <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 rounded-xl transition-all duration-300 pointer-events-none" />
                                        </a>
                                        
                                    ) : null;
                                })}
                            </div>
                            
                        </div>
                    </FadeIn>
                </div>

                {/* Footer */}
                <FadeIn delay={300}>
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className='text-white/50 text-sm'>
                                © {new Date().getFullYear()} {PersonalInfo.name}. All rights reserved.
                            </p>

                            <p className='flex items-center gap-2 text-white/50 text-sm'>
                                Built Using React & Tailwind Css
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Contact;