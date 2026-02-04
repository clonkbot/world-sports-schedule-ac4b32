import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#F5F0E8]/30 to-transparent mb-12 origin-left"
        />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[#F5F0E8]/50 font-serif text-sm tracking-[0.3em] uppercase">
                Live Schedule
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none"
            >
              WORLD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F0E8] via-[#F5F0E8] to-[#F5F0E8]/40">
                SPORTS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-[#F5F0E8]/50 font-serif text-lg max-w-md leading-relaxed"
            >
              Your gateway to the world&apos;s most prestigious sporting events.
              Filter by sport, location, and time to find your next unforgettable moment.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            {['Football', 'Basketball', 'Tennis', 'F1'].map((sport, i) => (
              <div key={sport} className="text-center">
                <div
                  className="w-1 h-8 mx-auto mb-2 rounded-full"
                  style={{
                    backgroundColor: ['#10B981', '#F97316', '#84CC16', '#EF4444'][i],
                    opacity: 0.8,
                  }}
                />
                <span className="text-[#F5F0E8]/40 text-[10px] tracking-[0.2em] uppercase font-serif">
                  {sport}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative diagonal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#F5F0E8]/20 via-[#F5F0E8]/5 to-transparent origin-left"
        />
      </div>
    </header>
  );
}
