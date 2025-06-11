import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import BgProfile from "../../assets/img/Bg_User.png";
import DisconnectConfirmModal from "../../components/modals/DisconnectConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../store/api/apiRequestUser";

const Profile = () => {
  const [email, setEmail] = useState();
  const [inviteCode, setInviteCode] = useState();
  const [partner, setPartner] = useState();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const currentUser = useSelector((state: any) => state.auth.login.currentUser);
  const myInfo = useSelector((state: any) => state.user.getMyInfo.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      navigate("/dang-nhap");
    }
    getMyInfo(dispatch);
  }, [dispatch, currentUser]);
  useEffect(() => {
    if (myInfo && myInfo.result) {
      setEmail(myInfo.result.user_email || "Chưa có email");
      setInviteCode(myInfo.result.user_code || "Chưa có mã mời");
      setPartner(myInfo.result.your_partner.user_name || "Chưa kết nối");
    }
  }, [myInfo, dispatch]);

  const handleDisconnect = () => {
    setShowDisconnectModal(false);
  };

  return (
    <div
      className="pt-40 flex justify-center h-screen"
      style={{
        backgroundImage: ` url(${BgProfile})`,
        backgroundSize: "cover",
      }}
    >
      <form className="space-y-6">
        <h2 className="text-4xl text-center mb-6">Thông tin cá nhân</h2>

        <div className="space-y-4 w-[600px]">
          {/* Email */}
          <div className="flex items-center">
            <label className="w-40 text-lg font-semibold">Email</label>
            <input
              type="email"
              value={email}
              readOnly
              className="max-w-80 flex-1 px-4 py-2 rounded-lg border bg-gray-100"
            />
          </div>

          {/* Mã mời */}
          <div className="flex items-center">
            <label className="w-40 text-lg font-semibold">Mã mời của bạn</label>
            <input
              type="text"
              value={inviteCode}
              readOnly
              className="max-w-80 flex-1 px-4 py-2 rounded-lg border bg-gray-100"
            />
          </div>

          {/* Partner */}
          <div className="flex items-center">
            <label className="w-40 text-lg font-semibold">Partner</label>
            <div className="flex flex-1">
              <input
                type="text"
                value={partner}
                readOnly
                className="max-w-80 flex-1 px-4 py-2 rounded-lg border bg-gray-100"
              />
              <button
                className="ml-4 underline text-black whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDisconnectModal(true);
                }}
              >
                Hủy kết nối
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-12 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300">
            Chỉnh sửa thông tin
            <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-12 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300">
            Đổi mật khẩu
            <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </form>
      <DisconnectConfirmModal
        isOpen={showDisconnectModal}
        onClose={() => {
          setShowDisconnectModal(false);
        }}
        onDisconnect={handleDisconnect}
        partnerName={partner}
      />
    </div>
  );
};

export default Profile;
