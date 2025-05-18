import { useNavigate } from "react-router-dom";
import BgLogin from "../assets/img/Bg_Login.jpg";
import IconGoogle from "../assets/img/Icon_Google.png";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credentialResponse.access_token}`
        );
        console.log(res.data);
        navigate("/");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

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
      <div className="relative z-10 w-[90%] md:w-4/5 lg:w-3/5 h-auto sm:h-3/4 py-10 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-3xl md:rounded-[4.375rem] flex-col px-4">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] text-black font-normal">
          PerfectDate
        </h1>
        <span className="text-lg sm:text-xl md:text-[30px] text-black font-thin text-center mt-2">
          Less Planning, More Loving
        </span>
        <button
          className="mt-4 sm:mt-6 md:mt-[2.5rem] h-8 sm:h-10 w-full max-w-[12rem] bg-white flex items-center justify-center gap-1 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => handleLogin()}
        >
          <img src={IconGoogle} alt="" className="w-4 sm:w-5" />
          <span className="text-[12px] sm:text-[14px] text-black font-thin">
            Đăng nhập bằng Google
          </span>
        </button>
      </div>
    </section>
  );
};

export default Login;
