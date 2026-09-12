import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCheckCircle, FaRegUser } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

const ProfileCard = () => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center items-center w-full perspective-[1000px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-[90vw] max-w-[340px] h-[420px] sm:h-[520px] rounded-[2.5rem] bg-white p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,255,220,0.15)] cursor-pointer"
      >
        <div 
          className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-[#57606f]"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          {/* Background Image */}
          <img 
            src="/assets/profile.png" 
            alt="Hameed Code" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#404c5a] via-[#404c5a]/90 to-transparent"></div>

          {/* Card Content */}
          <div 
            className="absolute inset-x-0 bottom-0 p-6 text-white flex flex-col justify-end"
            style={{ transform: "translateZ(60px)" }}
          >
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-1">
              Hameed Code <FaCheckCircle className="text-white text-xl drop-shadow-md" />
            </h2>
            <h3 className="text-[16px] font-semibold text-gray-200 mb-4 drop-shadow-md">
              Full Stack Software Developer
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed font-medium drop-shadow-md">
              I build modern web applications using React, Node.js, PHP, MySQL and more.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 text-[15px] font-semibold text-gray-200">
                <div className="flex items-center gap-1.5">
                  <FaRegUser className="text-[17px] mb-0.5" />
                  <span>1.2K</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCode className="text-[19px]" />
                  <span>18+</span>
                </div>
              </div>
              
              <button 
                className="bg-white text-[#0f172a] px-5 py-2.5 rounded-full font-bold text-[15px] hover:bg-gray-100 transition-colors flex items-center gap-1.5 shadow-lg active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://github.com/mhdhameed7/", "_blank");
                }}
              >
                Follow <span className="text-[20px] leading-none font-medium mb-[2px]">+</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
