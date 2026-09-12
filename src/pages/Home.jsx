import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaBriefcase, FaCode, FaCertificate, FaGlobe, FaArrowRight, FaCube, FaFacebook, FaTelegram } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import { AnimatedGradientTextDemo } from '../components/AnimatedGradientTextDemo';
import GradientText from '../components/GradientText';
import TextGenerateEffect from "../components/text-generate-effect";
import Skills from '../components/Skills';
import { VelocityScroll } from '../components/VelocityScroll';
import { ButtonMovingBorder } from '../components/MovingBorderButton';
import ProjectSection from '../components/ProjectSection';
import Contact from '../components/Contact';
import ProfileCard from '../components/ProfileCard';
import { useTheme } from '../contexts/ThemeContext';
import ParticleText from '../components/ParticleText';
import cvFile from '../assets/CV/Hameed Intern Software Engineer.pdf';

const Home = () => {
    const { theme } = useTheme();

    const [is3dEnabled, setIs3dEnabled] = useState(() => {
        if (typeof window !== 'undefined') {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const isSmallScreen = window.innerWidth < 1024;
            return !isMobile && !isSmallScreen;
        }
        return true;
    });

    const toggle3dAssets = () => {
        setIs3dEnabled(prev => !prev);
    };



    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 px-8 max-w-7xl mx-auto"
        >
            <button
                onClick={toggle3dAssets}
                title={`Toggle 3D Assets (${is3dEnabled ? 'On' : 'Off'})`}
                className={`fixed top-24 right-4 z-50 p-3 rounded-full border backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110
          ${is3dEnabled
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_2px_#00ffdc80]'
                        : 'dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-400 bg-white border-slate-200 text-slate-600 shadow-sm'
                    }`}
            >
                <FaCube className="h-5 w-5" />
            </button>

            <section id="home" className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 pt-20 pb-16 lg:pt-0 lg:pb-20">
                <div className="flex-1 dark:text-white text-slate-800 space-y-6 pt-16 md:pt-40 order-last lg:order-none text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
                        <AnimatedGradientTextDemo />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                        className="text-4xl md:text-4xl font-moderniz font-bold leading-tight select-none main-heading"
                        style={{
                            color: theme === 'dark' ? "#00ffdc" : "#0f172a",
                            textShadow: theme === 'dark'
                                ? "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc"
                                : "none"
                        }}
                    >
                        WELCOME TO MY
                        <span style={{ display: 'block', marginTop: '0.4em' }}>PORTFOLIO</span>
                    </motion.h1>
                    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}>
                        <GradientText colors={["#40f2ffff", "#4079ff", "#40fffcff", "#4079ff", "#40f9ffff"]} animationSpeed={3} className="custom-class font-cascadia font-bold" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}>
                        <TextGenerateEffect words={'I craft responsive and visually engaging websites using React, Tailwind CSS, and modern web technologies.'} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}>
                        <Skills />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }} className="flex flex-row gap-4 mt-8">
                        <a href="https://github.com/mhdhameed7/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border dark:border-slate-700 border-slate-200 dark:bg-slate-900/[0.8] bg-white text-slate-600 dark:text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md dark:hover:shadow-[0_0_24px_2px_#00ffdc]">
                            <FaGithub className="h-6 w-6 dark:text-slate-400 text-slate-600 transition-all duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                        </a>
                        <a href="https://www.instagram.com/itzprincehameed?stkn=MXhnM2x1ZjZlOWk4NQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border dark:border-slate-700 border-slate-200 dark:bg-slate-900/[0.8] bg-white text-slate-600 dark:text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md dark:hover:shadow-[0_0_24px_2px_#00ffdc]">
                            <FaInstagram className="h-6 w-6 dark:text-slate-400 text-slate-600 transition-all duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/mhd-hameed-2895a2342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border dark:border-slate-700 border-slate-200 dark:bg-slate-900/[0.8] bg-white text-slate-600 dark:text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md dark:hover:shadow-[0_0_24px_2px_#00ffdc]">
                            <FaLinkedin className="h-6 w-6 dark:text-slate-400 text-slate-600 transition-all duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Side: 3D Profile Card */}
                <div className="flex-1 flex justify-center lg:justify-end items-center w-full lg:pt-32">
                    <ProfileCard />
                </div>
            </section>

            <section
                id="about"
                className="py-12 md:py-18 gap-0 w-full mx-0 pt-20"
                style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
            >
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center">
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-20">
                        <VelocityScroll defaultVelocity={3} numRows={1} className="max-w-full">
                            <span className="font-moderniz font-bold" style={{ fontSize: "2.5rem", lineHeight: "1.1", color: theme === 'dark' ? "#00ffdc" : "#0891b2", textShadow: theme === 'dark' ? "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc" : "none", background: "none", WebkitBackgroundClip: "unset", WebkitTextFillColor: "unset", filter: theme === 'dark' ? 'none' : 'none', opacity: theme === 'dark' ? 1 : 0.3 }}>
                                ABOUT <span style={{ color: theme === 'dark' ? "#fff" : "#0891b2" }}>ME</span>
                            </span>
                        </VelocityScroll>
                        <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r ${theme === 'dark' ? 'from-[#060010]' : 'from-slate-50'}`}></div>
                        <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l ${theme === 'dark' ? 'from-[#060010]' : 'from-slate-50'}`}></div>
                        <VelocityScroll defaultVelocity={-3} numRows={1} className="max-w-full">
                            <span className="font-moderniz font-bold" style={{ fontSize: "2.5rem", lineHeight: "1.1", color: theme === 'dark' ? "#00ffdc" : "#0891b2", textShadow: theme === 'dark' ? "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc" : "none", background: "none", WebkitBackgroundClip: "unset", WebkitTextFillColor: "unset", filter: theme === 'dark' ? 'none' : 'none', opacity: theme === 'dark' ? 1 : 0.3 }}>
                                ABOUT <span style={{ color: theme === 'dark' ? "#fff" : "#0891b2" }}>ME</span>
                            </span>
                        </VelocityScroll>
                    </div>
                    <p className="text-lg dark:text-cyan-200/70 text-slate-600 mt-2 font-cascadia px-1 mb-20">
                        ✧ Passionate about coding and creative technology ✧
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center">
                    {is3dEnabled && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="md:w-1/3 flex justify-center"
                        >
                            <div className="w-full h-[420px] md:h-[530px] flex items-center justify-center">
                                <Spline scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode" />
                            </div>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className={`dark:text-white text-slate-800 text-center md:text-left px-4 md:px-8 transition-all duration-700 ${is3dEnabled ? 'md:w-1/2' : 'md:w-2/3'}`}
                    >
                        <div style={{ width: '100%', height: 40, position: 'relative' }} className="flex justify-center md:justify-start">
                            <ParticleText 
                                text="HELLO, I'M" 
                                particleSize={1.5}
                                density={3}
                                color={theme === 'dark' ? "#00ffdc" : "#64748b"}
                                highlightColor={theme === 'dark' ? "#4079ff" : "#94a3b8"}
                                fontSize="1.5rem"
                                fontFamily="Moderniz, sans-serif"
                            />
                        </div>
                        <div style={{ width: '100%', height: 70, position: 'relative', marginTop: '8px' }} className="flex justify-center md:justify-start">
                            <ParticleText 
                                text="MHDHAMEED" 
                                particleSize={2}
                                density={4}
                                color={theme === 'dark' ? "#ffffff" : "#0f172a"}
                                highlightColor={theme === 'dark' ? "#40ffaa" : "#0891b2"}
                                fontSize="2.25rem"
                                fontFamily="Moderniz, sans-serif"
                            />
                        </div>
                        <p className="dark:text-white/80 text-slate-600 leading-relaxed mt-4 font-cascadia text-justify">
                            I am passionate about technology and software development, with a strong interest in programming and artificial intelligence. I enjoy building applications, solving problems, and continuously learning through hands-on projects. My goal is to build a successful career in software development and create innovative solutions to real-world problems.
                        </p>
                        <div className="my-6 dark:bg-slate-900/50 bg-slate-50 border-l-4 dark:border-[#00ffdc] border-cyan-600 p-4 rounded-r-lg italic dark:text-white/70 text-slate-700 font-cascadia dark:shadow-none shadow-md">
                            "Whoever strives shall succeed."
                        </div>
                        <div className="flex flex-row sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center">
                            <ButtonMovingBorder as="a" href={cvFile} download="Hameed Intern Software Engineer.pdf" duration={3000} borderRadius="0.75rem" className="dark:bg-slate-900/[0.8] bg-white border dark:border-slate-800 border-slate-200 dark:text-white text-slate-800 font-semibold flex items-center justify-center gap-2 transition-all duration-300 dark:shadow-none shadow-md hover:shadow-lg dark:hover:shadow-[0_0_24px_8px_#40ffaa]">
                                <FaDownload /> Download CV
                            </ButtonMovingBorder>
                            <ButtonMovingBorder as="a" href="#projects" duration={3000} borderRadius="0.75rem" className="dark:bg-slate-900/[0.8] bg-white border dark:border-slate-800 border-slate-200 dark:text-white text-slate-800 font-semibold flex items-center justify-center gap-2 transition-all duration-300 dark:shadow-none shadow-md hover:shadow-lg dark:hover:shadow-[0_0_24px_8px_#40ffaa]">
                                <FaBriefcase /> View Projects
                            </ButtonMovingBorder>
                        </div>
                    </motion.div>
                </div>

            </section>

            <section id="projects" className="md:py-18">
                <ProjectSection />
            </section>

            <section id="contact" className="py-20 pb-16">
                <Contact />
            </section>

            <footer className="py-16 pb-20 text-center flex flex-col items-center">
                <h3 className="text-sm font-moderniz tracking-[0.3em] dark:text-slate-200 text-slate-800 mb-8 uppercase font-bold">FOLLOW ME</h3>
                <div className="flex gap-4 mb-10">
                    <a href="https://www.instagram.com/itzprincehameed?stkn=MXhnM2x1ZjZlOWk4NQ==" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl dark:bg-[#0a0a0f] bg-white border dark:border-slate-800/80 border-slate-200 hover:scale-105 transition-transform duration-300 shadow-sm">
                        <FaInstagram className="text-2xl dark:text-white text-slate-800" />
                    </a>
                    <a href="https://github.com/mhdhameed7/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl dark:bg-[#0a0a0f] bg-white border dark:border-slate-800/80 border-slate-200 hover:scale-105 transition-transform duration-300 shadow-sm">
                        <FaGithub className="text-2xl dark:text-white text-slate-800" />
                    </a>
                    <a href="https://www.facebook.com/share/1HkoFszpC9/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl dark:bg-[#0a0a0f] bg-white border dark:border-slate-800/80 border-slate-200 hover:scale-105 transition-transform duration-300 shadow-sm">
                        <FaFacebook className="text-2xl dark:text-white text-slate-800" />
                    </a>
                    <a href="https://www.linkedin.com/in/mhd-hameed-2895a2342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl dark:bg-[#0a0a0f] bg-white border dark:border-slate-800/80 border-slate-200 hover:scale-105 transition-transform duration-300 shadow-sm">
                        <FaLinkedin className="text-2xl dark:text-white text-slate-800" />
                    </a>
                </div>
                
                <div className="w-64 h-[1px] bg-gradient-to-r from-transparent dark:via-slate-700 via-slate-300 to-transparent mb-8"></div>
                
                <div className="text-xs md:text-sm font-cascadia dark:text-slate-400 text-slate-600 tracking-wide">
                    Copyright © {new Date().getFullYear()} All Rights Reserved | Created by <span className="dark:text-white text-slate-900 border-b-2 dark:border-white border-slate-900 pb-0.5 ml-1 font-semibold">Hameed</span>
                </div>
            </footer>
        </motion.div>
    );
};

export default Home;
