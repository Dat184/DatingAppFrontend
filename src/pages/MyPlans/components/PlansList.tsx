import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BgHover from "../../../assets/img/Bg_hover.png";
import NewPlanModal from "../../../components/modals/NewPlanModal";
import MoreIcon from "../../../assets/img/more_vert.png";
import DeleteConfirmModal from "../../../components/modals/DeleteConfirmModal";

type Plan = {
  date: string;
  title: string;
  description: string;
  author: string;
};

type PlansListProps = {
  plans: Plan[];
};

const PlansList: React.FC<PlansListProps> = ({ plans }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isNewPlanModalOpen, setIsNewPlanModalOpen] = useState(false);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
    setOpenedIndex(null);
  };

  return (
    <div className="py-6 px-8 md:px-16">
      <NewPlanModal
        isOpen={isNewPlanModalOpen}
        onClose={() => setIsNewPlanModalOpen(false)}
      />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-normal">Kế hoạch của tôi</h2>
        <button
          onClick={() => setIsNewPlanModalOpen(true)}
          className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-16 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300"
        >
          Thêm kế hoạch
          <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      <div className="max-w flex flex-wrap justify-between gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="w-[380px] max-h-[280px] bg-white rounded-3xl border-2 border-dashed border-[#2E3A22] shadow-md pb-12 pt-4 px-6 hover:shadow-lg transition-shadow cursor-pointer"
            style={{
              backgroundImage:
                hoveredIndex === index
                  ? `linear-gradient(rgba(255,255,255,0.8)), url(${BgHover})`
                  : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-end mb-4 relative">
              <img
                src={MoreIcon}
                alt=""
                className="w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenedIndex(openedIndex === index ? null : index);
                }}
              />

              {/* Popup Menu */}
              {openedIndex === index && (
                <div className="absolute top-10 right-0 z-10 bg-white border border-gray-300 rounded-lg shadow-md w-32">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm border-b border-gray-200">
                    Chỉnh sửa
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    Xóa
                  </button>
                </div>
              )}
            </div>
            <h2 className="text-2xl font-semibold mb-4">{plan.date}</h2>
            <h2 className="text-lg font-normal mb-1">{plan.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{plan.description}</p>
            <p className="text-sm text-right">
              Đăng bởi <span className="font-semibold">{plan.author}</span>
            </p>
          </motion.div>
        ))}
      </div>
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PlansList;
