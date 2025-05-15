import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import IconUser from "../../../assets/img/Icon_User.png";

type ConnectPartnerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ConnectPartnerModal: React.FC<ConnectPartnerModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [partnerId, setPartnerId] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setPartnerId("");
      setHasError(false);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (partnerId.trim() === "123456") {
      onSuccess();
    } else {
      setHasError(true);
    }
  };
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="mx-auto w-[400px] rounded-[40px] bg-white py-10 px-8 text-center shadow-xl">
          <Dialog.Title className="text-xl font-neue font-semibold mt-6 mb-8">
            Kết nối với Partner của bạn ngay nào
          </Dialog.Title>
          <div className="mt-6 mb-4 w-full flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src={IconUser}
                alt="User Icon"
                className="absolute left-4 top-3 w-5 h-5"
              />
              <input
                id="partnerId"
                name="partnerId"
                type="text"
                value={partnerId}
                onChange={(e) => setPartnerId(e.target.value)}
                required
                autoComplete="off"
                className={`peer w-full placeholder:font-normal border rounded-lg pl-10 py-3 placeholder text-sm focus:outline-none 
                  ${
                    hasError
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#8d8d8d] focus:border-[#799972]"
                  }`}
                placeholder="Nhập ID Partner ở đây..."
              />
              <label
                htmlFor="partnerId"
                className={`
                  absolute left-4 text-sm bg-white px-1 transition-all duration-300
                  ${hasError ? "text-red-500 font-semibold" : "text-gray-500"}
                  opacity-0 invisible
                  peer-focus:opacity-100 peer-focus:visible peer-focus:-translate-y-2 peer-focus:scale-90
                  peer-valid:opacity-100 peer-valid:visible peer-valid:-translate-y-2 peer-valid:scale-90
                `}
              >
                Mã của partner
              </label>

              {hasError && (
                <p className="text-left text-red-500 text-xs mt-1 ml-2">
                  Mã người dùng không tồn tại.
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#E8DFF4] text-[#815C80] mt-4 px-8 py-2 rounded-md font-medium"
          >
            Kết nối ngay
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConnectPartnerModal;
