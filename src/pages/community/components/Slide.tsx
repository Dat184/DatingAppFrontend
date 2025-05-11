import BgSlide from "../../../assets/img/Bg_Slide.png";
import { MdOutlineLocationOn } from "react-icons/md";
import DropdownMenu, {
  DropdownOption,
} from "../../../components/ui/DropdownMenu";
import { IoFilterOutline } from "react-icons/io5";

const Slide = () => {
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

  // Xử lý sự kiện khi thay đổi lựa chọn
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

        <div className="bg-[#D7C6E34D]/30 p-6 rounded-lg shadow-lg max-w-md mb-4 mt-4 w-full mx-4">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold">Nội dung đầu tiên</h2>
          </div>
          <p className="text-gray-700">Đây là thẻ div thứ nhất.</p>
        </div>

        <div className="bg-[#D7C6E34D]/30 p-6 rounded-lg shadow-lg max-w-md mb-4 mt-4 w-full mx-4">
          <h2 className="text-2xl font-bold mb-3">Nội dung thứ hai</h2>
          <p className="text-gray-700">Đây là thẻ div thứ hai.</p>
        </div>
      </div>
    </section>
  );
};

export default Slide;
