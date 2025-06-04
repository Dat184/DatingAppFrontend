import { useState } from "react";
import { X, Plus, ArrowRight } from "lucide-react";

interface Activity {
  time: string;
  name: string;
  description: string;
}

const CreatePlans = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [activities, setActivities] = useState<Activity[]>([
    { time: "04:00", name: "", description: "" },
    { time: "04:00", name: "", description: "" },
  ]);
  const [notes, setNotes] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [style, setStyle] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleAddActivity = () => {
    setActivities([
      ...activities,
      { time: "04:00", name: "", description: "" },
    ]);
  };

  const handleRemoveActivity = (index: number) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const handleActivityChange = (
    index: number,
    field: keyof Activity,
    value: string
  ) => {
    const newActivities = [...activities];
    newActivities[index] = { ...newActivities[index], [field]: value };
    setActivities(newActivities);
  };

  return (
    <div className="min-h-screen mt-28 mx-36">
      {/* Title and Date*/}
      <div className=" mb-8">
        <div className="flex justify-between gap-6 pb-3 border-b border-b-[#272421]">
          <div className="relative w-[304px] max-w-sm">
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoComplete="off"
              className="peer w-full h-[44px] placeholder:font-normal border border-[#8d8d8d] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#799972] placeholder:text-sm focus:placeholder-transparent"
              placeholder="Tiêu đề"
            />
            <label
              htmlFor="title"
              className="absolute left-4 text-sm bg-white px-1 transition-all duration-300 text-gray-500 opacity-0 invisible
      peer-focus:opacity-100 peer-focus:visible peer-focus:-translate-y-2 peer-focus:scale-90
      peer-valid:opacity-100 peer-valid:visible peer-valid:-translate-y-2 peer-valid:scale-90"
            >
              Tiêu đề
            </label>
          </div>
          <div className="relative w-[304px]">
            <label
              htmlFor="date"
              className="absolute left-4 -top-3 text-sm bg-white px-1 text-gray-500"
            >
              Ngày
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full h-[44px] border border-[#8d8d8d] rounded-lg px-4 text-sm focus:outline-none focus:border-[#799972]"
            />
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-6">
        {/* Left column - Activities */}
        <div className="flex-1 w-2/4">
          <div className="space-y-4 max-h-[305.6px] overflow-y-auto">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-32 flex items-center pr-3 border-r-2 border-r-black">
                  <input
                    type="time"
                    value={activity.time}
                    onChange={(e) =>
                      handleActivityChange(index, "time", e.target.value)
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={activity.name}
                      onChange={(e) =>
                        handleActivityChange(index, "name", e.target.value)
                      }
                      placeholder="Tên hoạt động"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    value={activity.description}
                    onChange={(e) =>
                      handleActivityChange(index, "description", e.target.value)
                    }
                    placeholder="Mô tả"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button onClick={() => handleRemoveActivity(index)}>
                    <X size={24} className="text-black hover:text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleAddActivity}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-olive-900 bg-olive-50 rounded-lg hover:bg-olive-100"
          >
            <Plus className="w-4 h-4 mr-2" />
            Thêm hoạt động
          </button>

          {/* Notes */}
          <div className="mt-8">
            <label className="block text-sm font-medium mb-2">Ghi chú:</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Nhập ghi chú ở đây"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right column - AI Assistant */}
        <div className="w-2/4 bg-white shadow-xl border-2 rounded-3xl border-[#2E3A22]">
          <div className="p-8 top-24">
            <h2 className="text-center text-2xl mb-8">Quân sự tình yêu - AI</h2>

            <p className="text-gray-600 mb-8">
              Điền các thông tin cần thiết vào đây và chúng tôi sẽ giúp bạn gợi
              ý một số địa điểm nhé!
            </p>

            <form className="space-y-6">
              {/* Địa chỉ */}
              <div className="flex items-center">
                <label className="flex-1 block text-black mb-2">Bạn ở</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Nhập địa chỉ"
                  className="flex-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                />
              </div>

              {/* Khoảng cách */}
              <div className="flex items-center">
                <label className="flex-1 block text-black mb-2">
                  Khoảng cách mong muốn từ nơi ở
                </label>
                <select
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="flex-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                >
                  <option value="">Tất cả</option>
                  <option value="3">Dưới 3km</option>
                  <option value="5">3-5km</option>
                  <option value="10">5-10km</option>
                  <option value="20">Trên 10km</option>
                </select>
              </div>

              {/* Phong cách */}
              <div className="flex items-center">
                <label className="flex-1 block text-black mb-2">
                  Phong cách
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="flex-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                >
                  <option value="">Tất cả</option>
                  <option value="dynamic">Năng động</option>
                  <option value="luxury">Sang trọng</option>
                  <option value="romantic">Lãng mạn</option>
                  <option value="peaceful">Yên bình</option>
                  <option value="food">Ẩm thực</option>
                  <option value="art">Nghệ thuật</option>
                </select>
              </div>

              {/* Ghi chú */}
              <div className="flex items-center">
                <label className="flex-1 block text-black mb-2">
                  Ghi chú thêm (không bắt buộc)
                </label>
                <input
                  type="text"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Nhập ghi chú"
                  className="flex-1 w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                />
              </div>

              {/* Nút bấm */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-16 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300"
                >
                  Tạo ngay
                  <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 gap-16">
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-12 border group border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300"
          >
            Hủy
            <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center text-sm md:text[16px] py-2 px-8 md:py-2 md:px-12 border group bg-[#455038] text-white border-black rounded-full hover:bg-[#455038] hover:border-[#455038] hover:text-white transition-all duration-300"
          >
            Chỉnh sửa hoàn tất
            <ArrowRight className="ml-2 h-5 w-5 hidden group-hover:block group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlans;
