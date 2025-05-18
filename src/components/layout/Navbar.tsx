import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMyPlansPage = location.pathname === "/ke-hoach-cua-toi";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMyPlansPage || isScrolled
          ? "bg-[#455038] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto border-b">
        <nav className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center px-4 py-4 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Left Navigation */}
          <div className="hidden md:flex items-center text-center flex-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-8 py-7 flex-1 border-r text-xl border-white ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/cong-dong"
              className={({ isActive }) =>
                `px-8 py-7 flex-1 border-r text-xl border-white ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              Cộng đồng
            </NavLink>
          </div>{" "}
          {/* Center Logo */}
          <Link to="/" className="flex items-center justify-center flex-1">
            <span className="text-white font-serif text-2xl md:text-4xl font-bold">
              Perfect Date
            </span>
          </Link>
          {/* Right Navigation */}
          <div className="hidden md:flex items-center flex-1 text-center">
            <NavLink
              to="/ke-hoach-cua-toi"
              className={({ isActive }) =>
                `px-8 py-7 border-l flex-1 text-xl border-white ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              Kế hoạch của tôi
            </NavLink>
            <NavLink
              to="/lien-he"
              className={({ isActive }) =>
                `px-8 py-7 border-l flex-1 text-xl border-white ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
            >
              Liên hệ
            </NavLink>
          </div>{" "}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#455038] shadow-lg">
          <div className="flex flex-col items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full text-center py-4 border-b border-white/20 text-lg ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/cong-dong"
              className={({ isActive }) =>
                `w-full text-center py-4 border-b border-white/20 text-lg ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Cộng đồng
            </NavLink>
            <NavLink
              to="/ke-hoach-cua-toi"
              className={({ isActive }) =>
                `w-full text-center py-4 border-b border-white/20 text-lg ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Kế hoạch của tôi
            </NavLink>
            <NavLink
              to="/lien-he"
              className={({ isActive }) =>
                `w-full text-center py-4 text-lg ${
                  isActive ? "text-white" : "text-white/90 hover:text-white"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
