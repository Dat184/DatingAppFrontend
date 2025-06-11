import { useNavigate } from "react-router-dom";
import BgLogin from "../assets/img/Bg_Login.jpg";
import IconGoogle from "../assets/img/Icon_Google.png";
import { GoogleLogin } from "@react-oauth/google";
import { loginUserByGoogle } from "../store/api/apiRequestAuth";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      // Gửi ID Token đến backend
      const idToken = credentialResponse.credential;
      console.log(idToken);
      await loginUserByGoogle(idToken, dispatch, navigate);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
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
      <div className="relative z-10 w-[90%] md:w-4/5 lg:w-3/5 h-auto sm:h-3/4 py-10 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-3xl md:rounded-[4.375rem] flex-col px-4">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] text-black font-normal">
          PerfectDate
        </h1>{" "}
        <span className="text-lg sm:text-xl md:text-[30px] text-black font-thin text-center mt-2">
          Less Planning, More Loving
        </span>
        {/* Custom Button Wrapper for GoogleLogin */}
        <div className="mt-4 sm:mt-6 md:mt-[2.5rem]">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap={false}
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
            logo_alignment="left"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
