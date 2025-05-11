import { motion } from "framer-motion";
import BgCommunity from "../../../assets/img/Bg_community.png";

const Header = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: ` url(${BgCommunity})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Khám phá
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-8">
            những ý tưởng hẹn hò độc đáo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
