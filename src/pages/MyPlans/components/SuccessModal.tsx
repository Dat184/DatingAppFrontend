import React from "react";
import { Dialog } from "@headlessui/react";
import SuccessImage from "../../../assets/img/Bg_Success.png"; // Đặt đúng tên ảnh bạn tải lên

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreatePlan: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onCreatePlan,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center px-4">
        <Dialog.Panel className="bg-white rounded-[30px] px-6 py-8 text-center w-full max-w-sm shadow-xl">
          <img src={SuccessImage} alt="Success" className="mx-auto mb-6 w-32" />
          <Dialog.Title className="text-lg font-neue font-medium mb-4">
            Chúc mừng! Bạn vừa kết nối với <span>Mtrine</span>
          </Dialog.Title>
          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-2 border border-[#815C80] text-[#815C80] px-4 py-2 rounded-md font-medium"
            >
              <span>←</span> Quay về
            </button>
            <button
              onClick={onCreatePlan}
              className="flex items-center gap-2 bg-[#E8DFF4] text-[#815C80] px-4 py-2 rounded-md font-medium"
            >
              <span>♡</span> Tạo kế hoạch ngay
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SuccessModal;
