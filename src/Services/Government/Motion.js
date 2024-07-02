import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgressBar = () => {
    const [marketResearchProgress, setMarketResearchProgress] = useState(0);
    const [teamLeadingProgress, setTeamLeadingProgress] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const marketResearchInterval = setInterval(() => {
                setMarketResearchProgress(prevProgress => {
                    const newProgress = prevProgress + 2; // Increment progress by 2% per interval (adjust as desired)
                    if (newProgress >= 80) clearInterval(marketResearchInterval); // Stop when reaching 80%
                    return newProgress;
                });
            }, 25);

            const teamLeadingInterval = setInterval(() => {
                setTeamLeadingProgress(prevProgress => {
                    const newProgress = prevProgress + 1.5; // Increment progress by 1.5% per interval (adjust as desired)
                    if (newProgress >= 70) clearInterval(teamLeadingInterval); // Stop when reaching 70%
                    return newProgress;
                });
            }, 30);

            return () => {
                clearInterval(marketResearchInterval);
                clearInterval(teamLeadingInterval);
            };
        }
    }, [inView]);

    return (
        <div ref={ref} className='flex flex-col gap-6 h-screen p-40 w-full'>
            <div className='flex justify-between text-2xl w-full'>
                <p>Market Research</p>
                <p>{marketResearchProgress}%</p>
            </div>
            <div className='border-2 h-6 border-black'>
                <motion.div
                    className='h-full'
                    initial={{ width: '0%', backgroundColor: '#ffffff' }}
                    animate={{ width: `${marketResearchProgress}%`, backgroundColor: '#7F9CF5' }}
                />
            </div>

            <div className='flex justify-between text-2xl w-full mt-8'>
                <p>Team Leading</p>
                <p>{teamLeadingProgress}%</p>
            </div>
            <div className='border-2 h-6 border-black'>
                <motion.div
                    className='h-full'
                    initial={{ width: '0%', backgroundColor: '#ffffff' }}
                    animate={{ width: `${teamLeadingProgress}%`, backgroundColor: '#7F9CF5' }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
