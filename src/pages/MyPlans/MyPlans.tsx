import { useState, useEffect } from "react";
import PlansList from "./components/PlansList";
import NoPlans from "./components/NoPlans";
import Notification from "../../components/modals/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPlanList } from "../../store/api/apiRequestPlan";

const MyPlans = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const currentUser = useSelector((state: any) => state.auth.login.currentUser);
  const myInfo = useSelector((state: any) => state.user.getMyInfo.data);
  const planList = useSelector((state: any) => state.plan.planList.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      navigate("/dang-nhap");
    }
    setIsLoggedIn(true);
    getPlanList(dispatch);
  }, [dispatch, currentUser, navigate]);

  useEffect(() => {
    if (myInfo && myInfo.result) {
      getPlanList(dispatch);
    }
  }, [myInfo, dispatch]);

  const plans =
    planList?.result?.map((plan: any) => ({
      date: new Date(plan.startDate).toLocaleDateString("vi-VN"),
      title: plan.title,
      description: plan.description,
      author: plan.createdBy.user_name,
    })) || [];

  return (
    <div className="mt-20">
      {plans.length > 0 ? (
        <PlansList plans={plans} />
      ) : (
        <NoPlans isLoggedIn={isLoggedIn} />
      )}

      <Notification />
    </div>
  );
};

export default MyPlans;
