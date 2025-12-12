import React, { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'framer-motion';

export function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const useCases = [
    {
      title: '친구 모임',
      description: '카페, 식사, 술자리 비용을 한 번에 정산하세요',
      image: 'https://images.unsplash.com/photo-1650964794396-9b9efaccd585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwc2hhcmluZyUyMG1lYWx8ZW58MXx8fHwxNzYzNjQxNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      emoji: '🍕',
      gradient: 'from-[#3182f6] to-[#3167fc]',
    },
    {
      title: '회식',
      description: '팀 회식이나 부서 모임의 복잡한 정산도 간단하게',
      image: 'https://images.unsplash.com/photo-1663939384572-01dfa59d3d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZGlubmVyfGVufDF8fHx8MTc2MzY0MTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      emoji: '🍻',
      gradient: 'from-[#fee500] to-[#fdd800]',
    },
    {
      title: '여행 정산',
      description: '숙박, 교통, 식비 등 여행 경비를 한눈에 정리하세요',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBncm91cHxlbnwxfHx8fDE3NjM2NDE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      emoji: '✈️',
      gradient: 'from-[#3182f6] to-[#3167fc]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="usecases" className="px-5 py-16 md:py-24 relative">
      <div className="max-w-[450px] md:max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[#191f28]">
            어떤 모임이든{' '}
            <span className="bg-gradient-to-r from-[#3182f6] to-[#3167fc] bg-clip-text text-transparent">
              엔빵
            </span>
          </h2>
          <p className="text-gray-600">
            다양한 상황에서 엔빵을 활용해보세요
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/50 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                
                {/* Emoji badge */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {useCase.emoji}
                </motion.div>
                
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-bl-full`} />
                
                <div className="relative z-10">
                  <h3 className="text-xl mb-2 text-[#191f28] group-hover:text-[#3182f6] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
