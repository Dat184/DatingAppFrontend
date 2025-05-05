import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BgHome from '../../assets/img/Bg_home.jpg';

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `linear-gradient( rgba(215, 198, 227, 0.4)) , url(${BgHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
            Less Planning, More Loving
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-8">
            Nơi mọi cuộc hẹn đều trở thành kỉ niệm đáng nhớ...
          </p>
          <Link 
            to="/cong-dong" 
            className="rounded-full border transition-all duration-300 inline-flex items-center justify-center text-lg py-2 px-16 group text-white hover:bg-[#455038] hover:border-[#455038]"
          >
            <span>Khám phá ngay</span>
            <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;