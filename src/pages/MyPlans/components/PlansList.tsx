import React from "react";

type Plan = {
  date: string;
  title: string;
  description: string;
  author: string;
};

type PlansListProps = {
  plans: Plan[];
};

const PlansList: React.FC<PlansListProps> = ({ plans }) => {
  return (
    <div className="py-6 px-8">
      <h2 className=" text-2xl font-normal mb-6">Kế hoạch của tôi</h2>
      <div className="mx-48 grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-[480px] max-h-[280px] bg-white rounded-3xl border border-[#2E3A22] shadow-md py-12 px-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.date}</h2>
            <h2 className="text-lg font-normal mb-1">{plan.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{plan.description}</p>
            <p className="text-sm text-right">
              Đăng bởi <span className="font-semibold">{plan.author}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansList;
