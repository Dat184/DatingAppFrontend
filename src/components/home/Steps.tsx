import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ArrowLeft from '../../assets/img/arrow_left_white.png'
import ArrowRight from '../../assets/img/arrow_right_white.png'

const Steps = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            number: '1.',
            title: 'Tìm kiếm ý tưởng',
            description: 'từ các bài đăng trong mục "Cộng đồng" hoặc AI, từ đó lên kế hoạch hẹn hò thật hoàn hảo',
            image: 'https://images.pexels.com/photos/6231991/pexels-photo-6231991.jpeg',
            buttonText: 'Tìm kiếm ngay'
        },
        {
            number: '2.',
            title: 'Tạo kế hoạch hẹn hò',
            description: 'và bắt đầu viết lên 1 lịch trình đã được lên kế hoạch kĩ lưỡng',
            image: 'https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg',
            buttonText: 'Tạo ngay'
        },
        {
            number: '3.',
            title: 'Thực hiện kế hoạch',
            description: 'đã được chuẩn bị và tận hưởng những khoảnh khắc tuyệt vời',
            image: 'https://images.pexels.com/photos/5759097/pexels-photo-5759097.jpeg',
            buttonText: 'Bắt đầu ngay'
        }
    ];

    const handlePrevStep = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveStep(prev => (prev === 1 ? 3 : prev - 1));
    };

    const handleNextStep = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveStep(prev => (prev === 3 ? 1 : prev + 1));
    };

    return (
        <section className="bg-[#F7F2EA] py-2">
            <div className="">
                <div className='w-full h-28 bg-[#455038] flex items-center justify-center mb-2'>
                    <h2 className="text-3xl md:text-4xl font-serif text-white text-center">
                        Các bước để lên kế hoạch hẹn hò
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                    {steps.map((step, index) => {
                        const stepNumber = index + 1;
                        const isActive = stepNumber === activeStep;
                        const showLeftArrow = stepNumber !== 1;
                        const showRightArrow = stepNumber !== 3;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative ${isActive ? 'flex-[2]' : 'flex-1'
                                    } min-h-[480px] overflow-hidden transition-all duration-500 cursor-pointer`}
                                onClick={() => setActiveStep(stepNumber)}
                            >
                                {isActive ? (
                                    <>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A22]/70 to-transparent" />

                                        <div className="absolute z-10 inset-0 flex items-center justify-between px-4 pointer-events-none">
                                            <div className="pointer-events-auto">
                                                {showLeftArrow && (
                                                    <button
                                                        onClick={handlePrevStep}
                                                        className=""
                                                        aria-label="Previous step"
                                                    >
                                                        <img src={ArrowLeft} className='w-16' />

                                                    </button>
                                                )}
                                            </div>
                                            <div className="pointer-events-auto">
                                                {showRightArrow && (
                                                    <button
                                                        onClick={handleNextStep}
                                                        className=""
                                                        aria-label="Next step"
                                                    >
                                                        <img src={ArrowRight} className='w-16' />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-serif text-white mb-3">
                                                    {step.title}
                                                </h3>
                                                <p className="text-white/90 mb-4">
                                                    {step.description}
                                                </p>
                                                <button
                                                    className="inline-flex items-center px-6 py-3 bg-white rounded-full text-olive-900 hover:bg-white/90 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Heart className="w-5 h-5 mr-2" />
                                                    {step.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-[#455038] flex items-center justify-center">
                                        <span className="text-8xl font-serif text-white/90">
                                            {step.number}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Steps;