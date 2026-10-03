'use client';
import {motion,useScroll} from 'framer-motion';
export default function ScrollProgress(){const {scrollYProgress}=useScroll();return <motion.div style={{scaleX:scrollYProgress,transformOrigin:'0% 50%'}} className="fixed left-0 right-0 top-0 z-[100] h-1 bg-[#c6a15b]"/>}
