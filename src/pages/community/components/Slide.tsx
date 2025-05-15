import BgFeature from "../../../assets/img/Bg_Feature.png";
import img from "../../../assets/img/img_slide_community.jpg";

import { MdOutlineLocationOn } from "react-icons/md";
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
          backgroundImage: `url(${BgFeature})`,
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
        />
        <Content
          showFullContent={showFullContent}
          setShowFullContent={setShowFullContent}
          img={img}
          fullContent={fullContent}
          name="Thành Đẹt"
          location="Bình Dương"
          date="04/05/2025"
          headerContent="Sài Gòn và mình tui..."
        />
      </div>
    </section>
  );
};

export default Slide;
