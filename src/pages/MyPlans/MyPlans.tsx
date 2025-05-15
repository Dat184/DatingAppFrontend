import React, { useState, useEffect } from "react";
import PlansList from "./components/PlansList";
import NoPlans from "./components/NoPlans";

const MyPlans = () => {
  const plans = [
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    {
      date: "24/05/2025",
      title: "Lịch trình Vũng Tàu nè!",
      description:
        "Mong rằng lịch trình này sẽ khiến cậu vui và hạnh phúc khi ở Vũng Tàu",
      author: "Qnhu nè",
    },
    // ... thêm kế hoạch khác
  ];

  return (
    <div className="mt-20">
      {plans.length > 0 ? <PlansList plans={plans} /> : <NoPlans />}
    </div>
  );
};

export default MyPlans;
