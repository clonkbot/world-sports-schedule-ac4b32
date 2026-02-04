import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-[#F5F0E8]/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-[#F5F0E8]/25 font-serif text-xs tracking-wide">
            Requested by{' '}
            <span className="text-[#F5F0E8]/35">@jinchurikifx</span>
            {' · '}
            Built by{' '}
            <span className="text-[#F5F0E8]/35">@clonkbot</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
