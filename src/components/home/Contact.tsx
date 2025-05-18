import BgContact from "../../assets/img/Bg_Contact.png";
import BgLetter from "../../assets/img/Bg_Letter.jpg";
import { ArrowRight } from "lucide-react";
const Contact = () => {
  return (
    <div>
      {" "}
      <section
        className="py-16 md:py-28 flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-16 relative overflow-hidden px-4"
        style={{
          backgroundImage: ` url(${BgContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-6 md:mb-0">
          <img
            src={BgLetter}
            alt=""
            className="w-full max-w-[350px] md:max-w-[450px] h-auto aspect-[450/270] -rotate-12 bg-cover bg-center object-cover border-[10px] md:border-[15px] border-[#A8B49C]"
          />
        </div>
        <div className="flex items-center justify-center flex-col text-center">
          {" "}
          <h1 className="text-xl md:text-[25px] ">Liên hệ với chúng tôi</h1>
          <p className="text-base md:text-[18px]">
            nếu bạn có bất kì thắc mắc hay góp ý nào nhé!
          </p>
          <button className="flex items-center mt-4 py-2 px-8 md:px-16 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300 text-sm md:text-base">
            Liên hệ ngay!
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
