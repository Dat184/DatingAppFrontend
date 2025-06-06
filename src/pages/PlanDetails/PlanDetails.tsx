import { useState } from "react";
import NewPlantPostModal from "../../components/modals/NewPlantPostModal";
import PlanDetailContent from "./components/PlanDetailContent";
import DeleteConfirmModal from "../../components/modals/DeleteConfirmModal";

export default function PlanDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
  };
  return (
    <div className="justify-center items-center flex flex-col mt-32 mb-56">
      <h2 className="text-3xl mb-9">Chi tiết kế hoạch</h2>
      <PlanDetailContent></PlanDetailContent>
      <div className="mt-16 flex flex-row justify-center items-center gap-52">
        <button className="px-16 py-3 rounded-full  border-2 border-black">
          Chỉnh sửa
        </button>
        <button
          className="px-16 py-3 rounded-full  border-2 border-black"
          onClick={() => setShowDeleteModal(true)}
        >
          Xóa
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-16 py-3 rounded-full bg-[#455038] text-white border-2 border-black"
        >
          Chia sẻ công khai
        </button>
      </div>

      <NewPlantPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
