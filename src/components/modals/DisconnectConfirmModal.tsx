import { motion } from "framer-motion";
import WarningImg from "../../assets/img/IconWarning.png";

const DisconnectConfirmModal = ({
  isOpen,
  onClose,
  onDisconnect,
  partnerName,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDisconnect: () => void;
  partnerName: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 py-20 w-[500px] relative"
      >
        {/* Warning Image */}
        <div className="flex justify-center mb-4">
          <img src={WarningImg} alt="Cảnh báo" className="w-10" />
        </div>

        {/* Text */}
        <p className="text-lg font-neue text-center mb-2">
          Bạn có chắc chắn muốn hủy kết nối {partnerName}?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-8 pt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-[#2E3A22] border border-[#2E3A22]"
          >
            Quay về
          </button>
          <button
            onClick={onDisconnect}
            className="px-4 py-2 rounded-lg bg-[#2E3A22] text-white"
          >
            Hủy kết nối
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DisconnectConfirmModal;
