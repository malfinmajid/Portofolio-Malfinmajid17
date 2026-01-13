import React from 'react';
import { ChevronDown, ShieldCheck} from 'lucide-react';
import { SiGithub, SiPostman, SiApachejmeter, SiJavascript, SiTrello} from 'react-icons/si';
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { PersonalInfo, Stats } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            <RadialGradientBackground variant="hero" />
            
            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column-Content */}
                    <div className="text-left">
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-primary"/>
                                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                                            {PersonalInfo.title} | Based in {PersonalInfo.location}
                                        </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-1 leading-tight">
                                 I'm Muhammad Alfin Majid 
                            </h1>
                                 <h6 className="text-4xl text-primary/70 max-w-162.5 mb-5">Junior Software Quality Assurance (Manual Tester)</h6>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="text-lg text-white/70 max-w-137.5 mb-8">
                                A QA Tester with practical experience in manual testing and API testing using tools such as Postmana and Apache Jmeter. Involved in test case creation, test execution, API validation, and bug reporting with proper severity and priority classification to help maintain application quality.
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('Contact')}
                                className="inline-flex items-center gap-0 mb-12 group"
                                >
                                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6.5 py-3.25 text-base font-medium border border-white">Get in Touch</div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                                {Stats.map((stat, index) => (
                                    <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                                        <div className="text-2xl font-normal text-primary mb-4.5 font-mono">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-white leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    
                    {/* Right Column - Image */}
                    <FadeIn delay={200}>
                                <div className="relative">
                                    <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500pxpx] ml-auto group">
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                                        </div>
                                    
                                        {/* Image Container */}
                                        <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)]">
                                            <img src="./images/foto_saya(2).jpg" alt="developer at work" className="w-full h-full object-cover"/>
                                        </div>

                                        {/* Tech Logo */}
                                        <div className="absolute bottom-6 left-6 z-20">
                                            <FadeIn delay={500}>
                                                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <SiGithub className='w-full h-full text-primary'></SiGithub>
                                                    </div>

                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <SiPostman className='w-full h-full text-primary'></SiPostman>
                                                    </div>

                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <SiApachejmeter className='w-full h-full text-primary'></SiApachejmeter>
                                                    </div>

                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <SiJavascript className='w-full h-full text-primary'></SiJavascript>
                                                    </div>

                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <SiTrello className='w-full h-full text-primary'></SiTrello>
                                                    </div>

                                                    <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                                                        <PiMicrosoftExcelLogoFill className='w-full h-full text-primary'></PiMicrosoftExcelLogoFill>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>
                                    </div>
                                </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
            >
                <ChevronDown className='w-8 h-8 text-primary' />

            </button>
        </section>
    )
}

export default Hero


