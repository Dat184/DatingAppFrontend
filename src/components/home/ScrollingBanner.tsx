import { motion } from 'framer-motion';

const ScrollingBanner = () => {
  return (
    <div className="bg-[#2E3A22] overflow-hidden py-4">
      <div className="flex whitespace-nowrap py-1 border-y-2 border-white">
        <motion.div
          className="flex gap-6 text-white"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
          <span className="text-lg">•</span>
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
          <span className="text-lg">•</span>
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
          <span className="text-lg">•</span>
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
          <span className="text-lg">•</span>
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
          <span className="text-lg">•</span>
          <span className="text-lg">PerfectDate</span>
          <span className="text-lg">•</span>
          <span className="text-lg">Less Planning More Loving</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBanner;