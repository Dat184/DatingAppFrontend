// import React from "react";
// import IconRing from "../../assets/img/IconRing.gif";
// const Notification = () => {
//   return (
//     <div className="fixed bottom-5 right-5 p-2 rounded-full bg-[#2E3A22] cursor-pointer">
//       <img src={IconRing} alt="" className="w-10" />
//     </div>
//   );
// };

// export default Notification;

import { useState } from "react";
import NotificationModal from "./NotificationModal";
import IconRing from "../../assets/img/IconRing.gif";

interface ConnectionRequest {
  id: string;
  username: string;
  userId: string;
}

const mockRequests: ConnectionRequest[] = [
  {
    id: "1",
    username: "Mtrine",
    userId: "2kfhkg",
  },
  {
    id: "2",
    username: "John",
    userId: "3kflm2",
  },
];

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState<ConnectionRequest[]>(mockRequests);

  const handleAccept = (requestId: string) => {
    // Here you would typically make an API call to accept the request
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  const handleDelete = (requestId: string) => {
    // Here you would typically make an API call to delete the request
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 p-2 rounded-full bg-[#2E3A22] cursor-pointer hover:bg-[#3a4a2c] transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          {requests.length > 0 && (
            <span className="absolute -top-2 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {requests.length}
            </span>
          )}
          <img src={IconRing} alt="Notifications" className="w-10" />
        </div>
      </div>

      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        requests={requests}
        onAccept={handleAccept}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Notification;
