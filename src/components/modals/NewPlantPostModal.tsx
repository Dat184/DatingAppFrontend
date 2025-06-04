import { ArrowRight, ImagePlus, X } from "lucide-react";

interface NewPlantPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPlantPostModal = ({ isOpen, onClose }: NewPlantPostModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg mx-4">
        <div className="flex justify-end items-center mb-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <h2 className="text-2xl text-center mb-6">
          Các thông tin cho bài đăng công khai
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <label className="block text-sm font-medium text-black">
              Tiêu đề
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] px-6 py-2 border border-gray-300 rounded-lg focus:border-transparent placeholder:text-xs placeholder:text-[#B0B0B0]"
                placeholder="Nhập tiêu đề..."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-start">
            <label className="block text-sm font-medium text-black mt-2">
              Mô tả
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] px-6 py-2 border border-gray-300 rounded-lg focus:border-transparent placeholder:text-xs placeholder:text-[#B0B0B0]"
                placeholder="Mô tả..."
              />
            </div>
          </div>
          {/* ảnh */}
          <div className="flex flex-col md:flex-row justify-between md:items-start">
            <label className="block text-sm font-medium text-black">Ảnh</label>
            <div className="relative w-full md:w-[300px]">
              <label className="flex flex-row cursor-pointer w-full">
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <ImagePlus className="mr-1" />
                <span className="text-sm text-black underline underline-offset-2 decoration-gray-300 decoration-2 ">
                  Tải ảnh lên
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-14 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-black  text-black "
            >
              Huỷ
            </button>
            <button
              type="submit"
              className=" flex items-center  px-4 py-2 bg-[#2E3A22] group text-white  "
            >
              Đăng tải
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPlantPostModal;
