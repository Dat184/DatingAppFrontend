import { ArrowRight, X } from "lucide-react";

interface NewPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPlanModal = ({ isOpen, onClose }: NewPlanModalProps) => {
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
        <h2 className="text-2xl text-center mb-6">Tạo kế hoạch hẹn hò</h2>

        <form className="space-y-6">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Tiêu đề
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-[300px] px-6 py-2 border border-gray-300 rounded-lg focus:border-transparent placeholder:text-xs placeholder:text-[#B0B0B0]"
                placeholder="Input here..."
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Mô tả
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-[300px] px-6 py-2 border border-gray-300 rounded-lg focus:border-transparent placeholder:text-xs placeholder:text-[#B0B0B0]"
                placeholder="Input here..."
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Ngày bắt đầu
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-[300px] px-6 py-2 border border-gray-300 rounded-lg focus:border-transparent placeholder:text-xs placeholder:text-[#B0B0B0]"
                placeholder="Input here..."
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Huỷ
            </button>
            <button
              type="submit"
              className=" flex items-center gap-1 pl-2 pr-4 py-2 bg-[#2E3A22] group text-white rounded-full transition-colors"
            >
              <ArrowRight className="ml-2 h-4 w-4 group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
              Tiếp theo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPlanModal;
