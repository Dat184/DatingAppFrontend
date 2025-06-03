import { motion } from "framer-motion";
import WarningImg from "../../assets/img/IconWarning.png";
import { X } from "lucide-react";

const DeleteConfirmModal = ({
  isOpen,
  onClose,
  onDelete,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 w-[400px] relative"
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning Image */}
        <div className="flex justify-center mb-4">
          <img src={WarningImg} alt="Cảnh báo" className="w-10" />
        </div>

        {/* Text */}
        <h2 className="text-xl font-neue font-semibold text-center mb-2">
          Bạn có chắc chắn muốn xóa?
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Mọi thay đổi sẽ không được hoàn tác
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-[#815C80] border border-[#815C80]"
          >
            Quay về
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-lg bg-[#C87B64] text-white"
          >
            Xóa kế hoạch
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirmModal;
