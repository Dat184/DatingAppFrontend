import { motion } from "framer-motion";
import Bg1 from "../../assets/img/Bg_demo.jpg";

const Introduction = () => {
  return (
    <section className="h-[645px] flex flex-row">
      {/* Left image block */}
      <div
        className='relative w-[40%] bg-[#A8B49C]'
      >
        <img
          src={Bg1}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] border-[15px] border-white rotate-12"
        />
      </div>

      {/* Right text block */}
      <div className='w-[60%] bg-[#F4E9D2] flex flex-col gap-7 justify-center p-24'>
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Chúng tôi mang đến
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Chúng tôi tin rằng mỗi buổi hẹn đều xứng đáng được đặc biệt. Dù là lần đầu
          gặp gỡ hay kỷ niệm yêu thương, chúng tôi giúp bạn tạo nên những khoảnh khắc
          đáng nhớ với các gợi ý hẹn hò được cá nhân hóa – từ không gian lãng mạn đến
          những trải nghiệm bất ngờ. Không còn loay hoay nghĩ xem đi đâu, làm gì – chỉ
          cần chọn người đồng hành, PerfectDate sẽ cùng bạn tạo nên một buổi hẹn trọn
          vẹn, nhẹ nhàng và đầy cảm xúc.
        </motion.p>
      </div>
    </section>
  );
};

export default Introduction;
