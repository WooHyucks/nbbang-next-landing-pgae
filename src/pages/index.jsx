import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { UseCases } from '../components/UseCases';
import { SocialLogin } from '../components/SocialLogin';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3182f6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fee500]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header / Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[450px] md:max-w-6xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#3182f6] to-[#3167fc] rounded-lg flex items-center justify-center shadow-lg shadow-[#3182f6]/30">
                <span className="text-white text-lg">N</span>
              </div>
              <h3 className="text-2xl bg-gradient-to-r from-[#3182f6] to-[#fee500] bg-clip-text text-transparent">
                엔빵
              </h3>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#3182f6] transition-colors">
                기능
              </a>
              <a href="#usecases" className="text-gray-600 hover:text-[#3182f6] transition-colors">
                활용 사례
              </a>
            </div>
            
            <motion.a
              href="https://nbbang.shop/"
              className="bg-gradient-to-r from-[#3182f6] to-[#3167fc] hover:shadow-lg hover:shadow-[#3182f6]/30 text-white px-6 py-2 rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              시작하기
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <UseCases />
        <CTASection />
        <SocialLogin />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

