import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(74, 47, 103, 0.8), rgba(74, 47, 103, 0.9)), url("https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Sẵn sàng cho những trải nghiệm hẹn hò đáng nhớ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Đăng ký ngay hôm nay và bắt đầu tạo ra những khoảnh khắc tuyệt vời với người bạn yêu thương.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/dang-ky" 
                className="btn btn-primary text-lg py-3 px-8 shadow-lg group"
              >
                <span>Đăng ký miễn phí</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/cong-dong" 
                className="btn btn-secondary text-lg py-3 px-8 shadow-lg"
              >
                Khám phá ý tưởng
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;