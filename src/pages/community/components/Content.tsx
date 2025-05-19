import React from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

interface ContentProps {
  showFullContent: boolean;
  setShowFullContent: (show: boolean) => void;
  img: string;
  fullContent: string;
  name?: string;
  location?: string;
  date?: string;
  headerContent?: string;
}

const Content = (props: ContentProps) => {
  const [bookmark, setBookmark] = React.useState(false);
  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };
  const {
    showFullContent,
    setShowFullContent,
    img,
    fullContent,
    name,
    location,
    date,
    headerContent,
  } = props;
  const shortContent = fullContent.slice(0, 50) + "...";
  return (
    <div className="bg-[#D7C6E34D]/30 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] shadow-lg max-w-5xl w-full mx-auto transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 sm:pb-3">
        <div className="flex items-center mb-2 sm:mb-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-lavender-300 border-lavender-500 flex items-center justify-center overflow-hidden border-2 mr-2 sm:mr-3 transition-transform duration-300">
            <MdOutlinePerson size={18} className="sm:text-xl md:text-2xl" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-[25px] font-normal">
            {name}
          </h2>
        </div>
        <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between w-full sm:w-auto">
          <div className="flex items-center mb-0 sm:mb-1">
            <span className="text-sm sm:text-base md:text-lg lg:text-[22px] text-black font-light">
              {location}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-xs sm:text-sm text-black">{date}</span>
          </div>
        </div>
      </div>

      <div
        className="rounded-lg sm:rounded-xl overflow-hidden relative mt-2 sm:mt-3 h-[14rem] xs:h-[16rem] sm:h-[20rem] md:h-[26rem] lg:h-[32rem] w-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 py-2 sm:py-3 px-3 sm:px-4 md:px-[1rem] text-white backdrop-blur-md bg-black/30 flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-4/5">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin mb-1 sm:mb-2">
              {headerContent}
            </h2>
            <div className="text-xs sm:text-sm md:text-base font-thin">
              <p>
                {showFullContent ? fullContent : shortContent}
                {!showFullContent && (
                  <button
                    onClick={() => setShowFullContent(true)}
                    className="ml-2 underline underline-offset-4 text-white/90 hover:text-white"
                  >
                    Xem thêm
                  </button>
                )}
                {showFullContent && (
                  <button
                    onClick={() => setShowFullContent(false)}
                    className="ml-2 underline underline-offset-4 text-white/90 hover:text-white"
                  >
                    Thu gọn
                  </button>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end sm:justify-center gap-1 sm:gap-2 mt-2 sm:mt-0">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-thin">
              24 người đã lưu
            </p>
            <button
              className="text-xl sm:text-2xl md:text-[30px] lg:text-[35px] font-thin"
              onClick={handleBookmarkClick}
            >
              {bookmark ? <IoBookmark /> : <IoBookmarkOutline />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
