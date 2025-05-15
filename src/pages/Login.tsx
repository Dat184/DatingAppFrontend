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
      <div className="relative z-10 h-3/4 w-3/5 bg-white/30 flex items-center justify-center rounded-[4.375rem] flex-col ">
        <h1 className="text-[50px] text-black font-normal">PerfectDate</h1>
        <span className="text[30px] text-black font-thin ">
          Less Planning, More Loving
        </span>
        <button
          className="mt-[2.5rem] h-8 w-[12rem] bg-white flex items-center justify-center gap-1"
          onClick={() => handleLogin()}
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
