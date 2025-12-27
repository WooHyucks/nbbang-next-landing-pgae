import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:kimwoosky123@gmail.com' },
  ];


  return (
    <footer className="bg-[#191f28] text-white px-5 py-8 md:py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#3182f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[450px] md:max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          {/* Brand */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#3182f6] to-[#3167fc] rounded-lg flex items-center justify-center shadow-lg shadow-[#3182f6]/30">
                <span className="text-white text-lg">N</span>
              </div>
              <h3 className="text-2xl bg-gradient-to-r from-[#3182f6] to-[#fee500] bg-clip-text text-transparent">
                엔빵
              </h3>
            </motion.div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              빠르고 편리한 모임 정산 서비스<br />
              복잡한 계산은 그만, 엔빵으로 간편하게!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#3182f6] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm text-center">
              © 2025 엔빵(Nbbang). All rights reserved.
            </p>
          </div>

          {/* Made with love badge */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className="text-gray-600 text-sm flex items-center justify-center gap-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Made with
              <motion.span
                className="text-red-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.span>
              in Korea
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
