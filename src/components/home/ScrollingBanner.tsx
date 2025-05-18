import { motion } from "framer-motion";

const ScrollingBanner = () => {
  return (
    <div className="bg-[#2E3A22] overflow-hidden py-2 md:py-4">
      <div className="flex whitespace-nowrap py-1 border-y border-y-white md:border-y-2">
        <motion.div
          className="flex gap-3 md:gap-6 text-white"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">PerfectDate</span>
          <span className="text-base md:text-lg">•</span>
          <span className="text-base md:text-lg">
            Less Planning More Loving
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
