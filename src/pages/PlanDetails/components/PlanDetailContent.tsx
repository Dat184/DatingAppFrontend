import Bg_PlanDetail from "../../../assets/img/Bg_PlanDetails.jpg";

export default function PlanDetailContent() {
  return (
    <section>
      <div className="w-5xl h-screen mt-25 mb-36 flex flex-row border-2 border-[#455038] ">
        <div className=" p-4 bg-[#455038] text-white w-20 min-h-[500px] flex items-center justify-center">
          <h1 className="-rotate-90 text-4xl p-2 ">24/05/2025</h1>
        </div>
        <div>
          <div className="flex flex-row justify-start w-fit h-fit p-4 text-black">
            <div className="flex flex-col items-center justify-center mr-8 p-6 border-r-2 border-[#455038]">
              <p className="text-[#455038] text-3xl font-semibold">4:30 SA</p>
            </div>
            <div>
              <p className="text-2xl mt-4">TP.HCM - Vũng Tàu</p>
              <p className="text-xl mt-4">
                Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-auto bg-[#000000]">
          <div className="w-full h-full relative">
            {/* Background div with opacity */}
            <div
              style={{
                backgroundImage: ` url(${Bg_PlanDetail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 opacity-40"
            />
            {/* Content div without opacity */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <h1 className="text-white text-4xl p-4">
                Trải nghiệm 1 ngày trọn vẹn ở Vũng Tàu thôi!!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
