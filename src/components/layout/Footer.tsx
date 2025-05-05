import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lavender-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="text-white h-6 w-6" />
              <span className="text-white font-serif text-xl font-bold">Perfect Date</span>
            </Link>
            <p className="text-lavender-100 mb-4">
              Biến mọi cuộc hẹn trở thành kỷ niệm đáng nhớ với những trải nghiệm độc đáo và tinh tế.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-lavender-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-lavender-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-lavender-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Khám phá</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-lavender-100 hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link to="/cong-dong" className="text-lavender-100 hover:text-white transition-colors">Cộng đồng</Link></li>
              <li><Link to="/ke-hoach-cua-toi" className="text-lavender-100 hover:text-white transition-colors">Kế hoạch của tôi</Link></li>
              <li><Link to="/lien-he" className="text-lavender-100 hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Thông tin</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-lavender-100 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-lavender-100 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-lavender-100 hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-lavender-100 hover:text-white transition-colors">Hỗ trợ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Liên hệ</h3>
            <address className="not-italic">
              <p className="text-lavender-100 mb-2">Hồ Chí Minh, Việt Nam</p>
              <p className="text-lavender-100 mb-2">Email: hello@perfectdate.vn</p>
              <p className="text-lavender-100">Điện thoại: +84 123 456 789</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-lavender-700 pt-6 mt-8">
          <p className="text-lavender-300 text-center text-sm">
            © {currentYear} Perfect Date. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;