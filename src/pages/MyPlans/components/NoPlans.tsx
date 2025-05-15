import React, { useState } from "react";
import noPlansImage from "../../../assets/img/Bg_NoPlans.png";
import ConnectPartnerModal from "./ConnectPartnerModal";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";
import NewPlanModal from "../../../components/modals/NewPlanModal";

type NoPlansProps = {
  isLoggedIn: boolean;
};

const NoPlans: React.FC<NoPlansProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isNewPlanModalOpen, setIsNewPlanModalOpen] = useState(false);

  const handleCreatePlan = () => {
    if (!isLoggedIn) {
      navigate("/dang-nhap");
    } else {
      setIsConnectModalOpen(true);
    }
  };

  const handleSuccess = () => {
    setIsConnectModalOpen(false); // Đóng connect partner modal
    setIsSuccessModalOpen(true); // Mở success modal
  };

  const handleCreatePlanFromSuccess = () => {
    setIsSuccessModalOpen(false);
    setIsNewPlanModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <img
        src={noPlansImage}
        alt="No plans"
        width={200}
        height={250}
        className="mb-6"
      />
      <p className="text-lg text-black font-normal mb-6">
        Có vẻ như bạn chưa có kế hoạch nào....
      </p>
      <button
        onClick={handleCreatePlan}
        className="px-14 py-2 border border-black text-[#2E3A22] font-semibold rounded-full transition"
      >
        Lập kế hoạch ngay
      </button>

      {/* Popup kết nối Partner */}
      <ConnectPartnerModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onSuccess={handleSuccess}
      />

      {/* Popup thành công */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onCreatePlan={handleCreatePlanFromSuccess}
      />

      <NewPlanModal
        isOpen={isNewPlanModalOpen}
        onClose={() => setIsNewPlanModalOpen(false)}
      />
    </div>
  );
};

export default NoPlans;
