import { X } from "lucide-react";

interface ConnectionRequest {
  id: string;
  username: string;
  userId: string;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: ConnectionRequest[];
  onAccept: (requestId: string) => void;
  onDelete: (requestId: string) => void;
}

const NotificationModal = ({
  isOpen,
  onClose,
  requests,
  onAccept,
  onDelete,
}: NotificationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50">
      <div className="bg-white w-full sm:w-[400px] sm:rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg">Yêu cầu kết nối</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {requests.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              Không có yêu cầu kết nối nào
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {requests.map((request) => (
                <div key={request.id} className="p-4">
                  <p className="text-gray-800 mb-3">
                    <b className="">{request.username}</b> (mã người dùng:{" "}
                    {request.userId}) muốn kết nối với bạn!
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => onDelete(request.id)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Xóa yêu cầu
                    </button>
                    <button
                      onClick={() => onAccept(request.id)}
                      className="flex-1 px-4 py-2 bg-[#2E3A22] text-white rounded-full transition-colors"
                    >
                      Chấp nhận
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
