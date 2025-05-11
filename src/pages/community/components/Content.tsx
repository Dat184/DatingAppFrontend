import React from "react";
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
    <div className="bg-[#D7C6E34D]/30 p-6 rounded-[2rem] shadow-lg max-w-5xl  mt-4  w-full mx-4 transition-all duration-300 ">
      <div className="flex items-center justify-between  border-b pb-3">
        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full bg-lavender-300 border-lavender-500 flex items-center justify-center overflow-hidden border-2 mr-3 transition-transform duration-300 `}
          >
            <MdOutlinePerson size={24} />
          </div>
          <h2 className="text-[25px] font-normal">{name}</h2>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-1">
            <span className="text-sm text-black">{location}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-black">{date}</span>
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
          <h2 className="text-2xl font-thin mb-2">{headerContent}</h2>
          <div className="text-base font-thin">
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
    </div>
  );
};

export default Content;
