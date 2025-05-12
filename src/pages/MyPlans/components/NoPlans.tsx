import React from "react";
import noPlansImage from "../../../assets/img/Bg_NoPlans.png"; 

type NoPlansProps = {
  onCreatePlan?: () => void;
};

const NoPlans: React.FC<NoPlansProps> = ({ onCreatePlan }) => {
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
        onClick={onCreatePlan}
        className="px-14 py-2 border border-black text-[#2E3A22] font-semibold rounded-full transition"
      >
        Lập kế hoạch ngay
      </button>
    </div>
  );
};

export default NoPlans;
