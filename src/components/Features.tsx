import React, { useRef } from 'react';
import { Users, Calculator, Send, Share2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Users,
      title: '모임 생성',
      description: '친구들과 쉽게 모임을 만들고, QR 코드나 링크로 간편하게 초대하세요',
      color: '#3182f6',
      gradient: 'from-[#3182f6] to-[#3167fc]',
    },
    {
      icon: Calculator,
      title: '자동 정산 계산',
      description: '누가 얼마를 썼고, 누구에게 얼마를 보내야 하는지 자동으로 계산해드립니다',
      color: '#fee500',
      gradient: 'from-[#fee500] to-[#fdd800]',
    },
    {
      icon: Send,
      title: '토스·카카오 원클릭 송금',
      description: '계산된 금액을 토스나 카카오페이로 클릭 한 번에 바로 송금할 수 있어요',
      color: '#3182f6',
      gradient: 'from-[#3182f6] to-[#3167fc]',
    },
    {
      icon: Share2,
      title: '실시간 공유',
      description: '모든 참여자가 실시간으로 정산 내역을 확인하고 투명하게 관리할 수 있어요',
      color: '#fee500',
      gradient: 'from-[#fee500] to-[#fdd800]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="px-5 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-[450px] md:max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl mb-4 text-[#191f28]">
            정산, 이제{' '}
            <span className="bg-gradient-to-r from-[#3182f6] to-[#3167fc] bg-clip-text text-transparent">
              쉽고 빠르게
            </span>
          </h2>
          <p className="text-gray-600">
            엔빵이 제공하는 강력한 기능들을 만나보세요
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100/50 relative overflow-hidden group cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${feature.gradient} shadow-lg`}
                    style={{
                      boxShadow: feature.color === '#fee500'
                        ? '0 8px 16px rgba(254, 229, 0, 0.2)'
                        : '0 8px 16px rgba(49, 130, 246, 0.2)',
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: feature.color === '#fee500' ? '#191f28' : 'white' }}
                    />
                  </motion.div>
                  <h3 className="text-xl mb-3 text-[#191f28] group-hover:text-[#3182f6] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${feature.gradient} opacity-5 rounded-tl-full`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
