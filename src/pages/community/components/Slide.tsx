import BgSlide from "../../../assets/img/Bg_Slide.png";
import img from "../../../assets/img/img_slide_community.jpg";
import {
  MdOutlineLocationOn,
  MdOutlineCalendarMonth,
  MdOutlinePerson,
} from "react-icons/md";
import DropdownMenu, {
  DropdownOption,
} from "../../../components/ui/DropdownMenu";
import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import Content from "./Content";

// Define the post data interface

const Slide = () => {
  // State để kiểm soát việc hiển thị toàn bộ nội dung hay rút gọn
  const [showFullContent, setShowFullContent] = useState(false);

  // Định nghĩa nội dung đầy đủ của bài viết
  const fullContent =
    "Tháng 5, Sài Gòn mưa rào, mình cùng nhau đi dạo phố. Những cơn mưa đầu mùa làm không khí dịu mát. Chúng tôi ghé vào một quán cà phê nhỏ trên đường Nguyễn Huệ, nơi có những chiếc ghế gỗ cũ kỹ và những tách cà phê thơm nồng. Tiếng mưa rơi trên mái tôn tạo nên một bản nhạc êm đềm, hòa quyện với tiếng cười nói rộn ràng.";

  // Nội dung rút gọn chỉ hiển thị 100 ký tự đầu tiên

  // Định nghĩa các tùy chọn cho dropdown đầu tiên với icon location
  const locationOptions: DropdownOption[] = [
    {
      value: "all",
      label: "Tất cả",
      icon: <MdOutlineLocationOn />,
    },
    { value: "HCM", label: "Hồ Chí Minh" },
    { value: "VT", label: "Vũng Tàu" },
    { value: "HG", label: "Hà Giang" },
  ];

  // Định nghĩa các tùy chọn cho dropdown thứ hai
  const secondOptions: DropdownOption[] = [
    { value: "New", label: "Mới nhất", icon: <IoFilterOutline /> },
    { value: "Famus", label: "Phổ biến nhất" },
  ];

  const handleLocationChange = (selectedOption: any) => {
    console.log("Lựa chọn vị trí:", selectedOption);
  };

  const handleSecondChange = (selectedOption: any) => {
    console.log("Lựa chọn thứ hai:", selectedOption);
  };

  return (
    <section>
      <div
        className="bg-cover bg-center w-full relative flex flex-col items-center justify-center py-12"
        style={{
          backgroundImage: `url(${BgSlide})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          minHeight: "fit-content",
        }}
      >
        {/* thanh filter / dropdonw */}
        <div className="flex flex-row justify-end mb-4 gap-2.5 w-[90%]">
          <DropdownMenu
            options={locationOptions}
            defaultValue={locationOptions[0]}
            onChange={handleLocationChange}
          />

          <DropdownMenu
            options={secondOptions}
            defaultValue={secondOptions[0]}
            onChange={handleSecondChange}
          />
        </div>

        <Content
          showFullContent={showFullContent}
          setShowFullContent={setShowFullContent}
          img={img}
          fullContent={fullContent}
          
          name="Thành Đẹt"
          location="Bình Dương"
          date="04/05/2025"
          headerContent="Sài Gòn và mình tui..."
        ></Content>

        {/* <div className="bg-[#D7C6E34D]/30 p-6 rounded-[2rem] shadow-lg max-w-5xl  mt-4  w-full mx-4 transition-all duration-300 ">
          <div className="flex items-center justify-between  border-b pb-3">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full bg-lavender-300 border-lavender-500 flex items-center justify-center overflow-hidden border-2 mr-3 transition-transform duration-300 `}
              >
                <MdOutlinePerson size={24} />
              </div>
              <span className="text-lg font-medium">Thành Đẹt</span>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-1">
                <span className="text-sm text-black">Bình Dương</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-black">04/05/2025</span>
              </div>
            </div>
          </div>
          <div
            className="rounded-xl overflow-hidden  relative"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              height: "32rem",
              width: "100%",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 py-[0.35rem] px-[1rem] text-white backdrop-blur-md ">
              <h2 className="text-2xl font-bold mb-2">
                Sài Gòn và mình tui...
              </h2>
              <div className="text-base">
                <p>
                  {showFullContent ? fullContent : shortContent}
                  {!showFullContent && (
                    <button
                      onClick={() => setShowFullContent(true)}
                      className="ml-2 underline underline-offset-4"
                    >
                      Xem thêm
                    </button>
                  )}
                  {showFullContent && (
                    <button
                      onClick={() => setShowFullContent(false)}
                      className="ml-2 underline underline-offset-4 "
                    >
                      Thu gọn
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Slide;
