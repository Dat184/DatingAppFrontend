import { motion } from "framer-motion";
import { useState } from "react";
import Bg_Feature from "../../assets/img/Bg_Feature2.png";
import Feature_1 from "../../assets/img/Feature_1.jpg";
import Feature_2 from "../../assets/img/Feature_2.jpg";
import Feature_3 from "../../assets/img/Feature_3.jpg";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title:
        "Chuẩn bị sẵn sàng những kế hoạch hẹn hò và gửi nó ngay tới đối phương",
      image: Feature_1,
      bgHover: Bg_Feature,
    },
    {
      title:
        "Vô vàn những ý tưởng hẹn hò được mọi người đề xuất trên nền tảng xã hội",
      image: Feature_2,
      bgHover: Bg_Feature,
    },
    {
      title: "Gợi ý những địa điểm phù hợp với mong muốn",
      image: Feature_3,
      bgHover: Bg_Feature,
    },
  ];

  return (
    <section className=" bg-white">
      <div className="">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer p-4 md:p-8 transition-all duration-500 border-x"
              style={{
                backgroundImage:
                  hoveredIndex === index
                    ? `linear-gradient(rgba(255, 255, 255, 0.8)), url(${feature.bgHover})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full max-w-[450px] h-auto aspect-[450/527] object-cover border border-x transition-all duration-500 ${
                    hoveredIndex === index ? "rounded-[100%]" : "rounded-2xl"
                  }`}
                />
              </div>
              <h2 className="text-[20px] md:text-[30px] font-serif leading-relaxed transition-colors duration-500 text-[#815C80]">
                {feature.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
