'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="relative flex justify-center items-center text-white px-6 py-12 max-w-7xl mx-auto">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden group border border-white/10"
        >
          <div className="absolute top-0 left-1/2 h-[5px] w-[80%] -translate-x-1/2 rounded-full bg-primary blur-[10px] shadow-[0_0_20px_theme(colors.primary)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Bachelor of Science (BSc) in CSE</h3>
              <p className="text-lg md:text-xl text-primary mt-2 font-medium">Notre Dame University Bangladesh</p>
            </div>
            <div className="bg-primary/20 text-primary px-5 py-2 rounded-full font-semibold border border-primary/30 whitespace-nowrap">
              2020 - 2025
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-lg md:text-xl text-gray-300 flex items-center gap-2">
              <span className="font-semibold text-foreground">CGPA:</span> 
              <span className="text-white font-bold bg-white/10 px-3 py-1 rounded-lg">3.76 <span className="text-sm text-gray-400 font-normal">out of 4.0</span></span> 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
