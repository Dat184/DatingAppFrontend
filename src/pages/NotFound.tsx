import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-lavender-600 mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
            Trang không tìm thấy
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link to="/" className="btn btn-primary shadow-md inline-flex items-center px-8 py-3">
            <Home className="mr-2 h-5 w-5" />
            Quay về trang chủ
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;