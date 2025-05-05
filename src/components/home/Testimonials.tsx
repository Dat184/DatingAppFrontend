import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Minh Anh',
    image: 'https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'Perfect Date đã giúp tôi tổ chức một buổi hẹn hò hoàn hảo trong dịp kỷ niệm. Mọi thứ đều tuyệt vời và người yêu tôi rất bất ngờ!'
  },
  {
    name: 'Quang Huy',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'Tôi đã sử dụng Perfect Date để tìm những ý tưởng hẹn hò mới lạ. Dịch vụ tuyệt vời, giao diện dễ sử dụng và rất nhiều gợi ý hay.'
  },
  {
    name: 'Thanh Hà',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    text: 'Nhờ Perfect Date, tôi không còn phải lo lắng về việc lên kế hoạch cho các buổi hẹn. Mọi thứ đều được sắp xếp một cách hoàn hảo!'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-lavender-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hàng ngàn cặp đôi đã có những trải nghiệm hẹn hò tuyệt vời với Perfect Date.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;