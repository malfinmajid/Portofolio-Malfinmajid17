import React from "react";
import { SiGithub, SiPostman, SiApachejmeter, SiJavascript, SiTrello, SiHtml5, SiCanva, SiFigma, SiCss3} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill } from "react-icons/pi";
import * as Icons from 'lucide-react'
import FadeIn from '../animations/FadeIn';

const Skills = () => {

     const skills = [
        { name: 'Github', icon: SiGithub, color: '#000000'},
        { name: 'Postman', icon: SiPostman, color: '#000000'},
        { name: 'ApacheJmeter', icon: SiApachejmeter, color: '#000000'},
        { name: 'Javascript', icon: SiJavascript, color: '#000000'},
        { name: 'Canva', icon: SiCanva, color: '#000000'},
        { name: 'Html5', icon: SiHtml5, color: '#000000'},
        { name: 'CSS', icon: SiCss3, color: '#000000'},
        { name: 'Trello', icon: SiTrello, color: '#000000'},
        { name: 'Figma', icon: SiFigma, color: '#000000'},
        { name: 'Vscode', icon: VscVscode, color: '#000000'},
        { name: 'Ms. Excel', icon: PiMicrosoftExcelLogoFill, color: '#000000'},
        { name: 'Ms. Word', icon: PiMicrosoftWordLogoFill, color: '#000000'},
    ];

    return <section id="skills" className="relative py-20 bg-black overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/15.5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/15.5  rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Icons.Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Skills</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                            Tech Stack
                        </h2>
                    </div>
            </FadeIn>

            {/* Skills Categories */}

             {/* Skill Grid Section (Mau Di Copy dan dipindahin)*/}
            <FadeIn delay={200}>
                <div className="flex flex-col items-center gap-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                        {skills.map((skill, index) => (
                            <div key={index} className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-ll duration-300 hover:scale-150">
                                 <skill.icon className="text text-primary" />
                                 <div className="text-sm text-white/80 font-medium text-center"> {skill.name} </div>

                                 {/* Hover Glow Effect */}
                                 <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
            
        </div>
    </section>
};

export default Skills;