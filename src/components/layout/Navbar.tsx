import { NavLink, Link } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#455038] shadow-md' : 'bg-transparent'
        }`}
    >
      <div className=" mx-auto border-b">
        <nav className="flex items-center">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center text-center flex-1">
            <NavLink
              to="/"
              className={({ isActive }) => `px-8 py-7 flex-1 border-r text-xl border-white ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/cong-dong"
              className={({ isActive }) => `px-8 py-7 flex-1 border-r text-xl border-white ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              Cộng đồng
            </NavLink>
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            className="flex items-center px-9 justify-center flex-1 md:flex-none "
          >
            <span className="text-white font-serif text-4xl font-bold">Perfect Date</span>
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center flex-1 text-center">
            <NavLink
              to="/ke-hoach-cua-toi"
              className={({ isActive }) => `px-8 py-7 border-l flex-1 text-xl border-white ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              Kế hoạch của tôi
            </NavLink>
            <NavLink
              to="/lien-he"
              className={({ isActive }) => `px-8 py-7 border-l flex-1 text-xl border-white ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              Liên hệ
            </NavLink>


          </div>
        </nav>
      </div>

      
    </header>
  );
};

export default Navbar;