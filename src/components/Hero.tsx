import React from 'react';
import { Zap, ArrowRight, Sparkles, Gift, Clock, Shield, Send, FileSpreadsheet, X } from 'lucide-react';
import { motion } from 'framer-motion';


export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className="px-5 py-12 md:py-20 relative">
      <div className="max-w-[450px] md:max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-2xl border-2 border-red-200/50 shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
              <FileSpreadsheet className="w-6 h-6 text-red-500" />
              <span className="text-lg md:text-xl font-bold text-red-600">
                아직도 엑셀로 정산하세요?
              </span>
            </motion.div>

          
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl mb-4 tracking-tight text-[#191f28]"
          >
            엑셀 정산을 대체하는<br />
            <span className="bg-gradient-to-r from-[#3182f6] to-[#3167fc] bg-clip-text text-transparent">
              엔빵
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto font-medium"
          >
            금액만 입력하면 정산과 송금(토스·카카오)이 바로 끝납니다.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-1 bg-gradient-to-r from-[#3167fc]/10 to-[#3182f6]/10 text-[#3167fc] px-4 py-2 rounded-full mb-8 border border-[#3182f6]/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Zap className="w-4 h-4 fill-current" />
              </motion.div>
              <span className="text-sm">빠른 정산, 원클릭 송금</span>
              <Sparkles className="w-3 h-3" />
            </motion.div>
          </motion.div>
          
          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-3 mb-6"
          >
            {[
              { text: '100% 무료', icon: Gift },
              { text: '단 10초만에 시작', icon: Clock },
              { text: '결제정보 불필요', icon: Shield },
              { text: '원클릭 송금', icon: Send },
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  className="group flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3182f6] to-[#3167fc] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#3182f6]/30">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="https://nbbang.shop/"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3182f6] to-[#3167fc] text-white px-8 py-4 rounded-2xl shadow-lg shadow-[#3182f6]/30 group overflow-hidden relative"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(49, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                지금 시작하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Hero Illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-[#3182f6]/5 via-white to-[#fee500]/5 rounded-3xl p-8 md:p-12 border border-gray-100/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(49, 130, 246, 0.15)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100/50 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3182f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#3182f6] to-[#3167fc] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#3182f6]/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-xl">👥</span>
                  </motion.div>
                  <h3 className="text-[#191f28] mb-2">모임 생성</h3>
                  <p className="text-sm text-gray-600">간편하게 모임을 만들고 친구들을 초대하세요</p>
                </div>
              </motion.div>
              
              <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(254, 229, 0, 0.15)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100/50 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fee500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#fee500] to-[#fdd800] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fee500]/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">🧮</span>
                  </motion.div>
                  <h3 className="text-[#191f28] mb-2">자동 계산</h3>
                  <p className="text-sm text-gray-600">누가 얼마를 내야 하는지 자동으로 계산됩니다</p>
                </div>
              </motion.div>
              
              <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(49, 130, 246, 0.15)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100/50 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3182f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#3182f6] to-[#3167fc] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#3182f6]/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="w-6 h-6 text-white fill-white" />
                  </motion.div>
                  <h3 className="text-[#191f28] mb-2">원클릭 송금</h3>
                  <p className="text-sm text-gray-600">토스·카카오페이로 바로 송금하세요</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#fee500] to-[#fdd800] rounded-full shadow-lg hidden md:block"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#3182f6] to-[#3167fc] rounded-full shadow-lg hidden md:block"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
