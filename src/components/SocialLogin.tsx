import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function SocialLogin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className="px-5 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3182f6]/5 to-[#fee500]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-[450px] md:max-w-3xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="bg-white/80 backdrop-blur-xl rounded-[20px] p-8 md:p-12 shadow-xl border border-gray-100/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3182f6] via-[#fee500] to-[#3167fc]" />
          
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-5 h-5 text-[#fee500] fill-[#fee500]" />
              <Sparkles className="w-5 h-5 text-[#3182f6] fill-[#3182f6]" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl mb-4 text-[#191f28]">
              간편하게 시작하기
            </h2>
            <p className="text-gray-600">
              소셜 계정으로 3초 만에 회원가입하세요
            </p>
          </motion.div>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Google Login */}
            <motion.a
              href="https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&client_id=470039216193-568hnttd1011ddmc5j22nqia9rcjm1ah.apps.googleusercontent.com&redirect_uri=https://nbbang.shop/google-redirect"
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-gray-50 text-[#191f28] px-6 py-4 rounded-2xl border-2 border-gray-200 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50 to-blue-50/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="relative z-10">Google로 시작하기</span>
            </motion.a>

            {/* Naver Login */}
            <motion.a
              href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=QND4X2NgUTIuoNUvS2uz&redirect_uri=https://nbbang.shop/naver-redirect"
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(3, 199, 90, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#03C75A] hover:bg-[#02b350] text-white px-6 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="white">
                <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
              </svg>
              <span className="relative z-10">네이버로 시작하기</span>
            </motion.a>

            {/* Kakao Login */}
            <motion.a
              href="https://kauth.kakao.com/oauth/authorize?client_id=3d14355e2c9679326b4c15d249b82bc5&redirect_uri=https://nbbang.shop/kakao-redirect&response_type=code"
              custom={2}
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(254, 229, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FEE500] hover:bg-[#fdd800] text-[#191f28] px-6 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-[#191f28]/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24">
                <path
                  fill="#191919"
                  d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"
                />
              </svg>
              <span className="relative z-10">카카오로 시작하기</span>
            </motion.a>
          </div>

          {/* Trust badge */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200/50 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              안전하고 빠른 소셜 로그인
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
