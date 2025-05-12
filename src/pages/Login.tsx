import { GrToast } from "react-icons/gr";
import BgLogin from "../assets/img/Bg_Login.jpg";
import IconGoogle from "../assets/img/Icon_Google.png";
const Login = () => {
  const handleBtnLogin = () => {
    alert("Login with Google");
  };
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: ` url(${BgLogin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 h-3/4 w-3/5 bg-white/30 flex items-center justify-center rounded-[4.375rem] flex-col ">
        <h1 className="text-[50px] text-black font-normal">PerfectDate</h1>
        <span className="text[30px] text-black font-thin">
          Less Planning, More Loving
        </span>
        <button
          className="mt-5 h-8 w-[12rem] bg-white flex items-center justify-center gap-1"
          onClick={handleBtnLogin}
        >
          <img src={IconGoogle} alt="" className="w-5" />
          <span className="text-[14px] text-black font-thin">
            Đăng nhập bằng Google
          </span>
        </button>
      </div>
    </section>
  );
};

export default Login;
