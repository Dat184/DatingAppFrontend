import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { AuthProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PlanDetails from "./pages/PlanDetails/PlanDetails";
import CreatePlans from "./pages/CreatePlans/CreatePlans";
import Profile from "./pages/Profile/Profile";
// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Community = lazy(() => import("./pages/community/Community"));
const MyPlans = lazy(() => import("./pages/MyPlans/MyPlans"));
// const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cong-dong" element={<Community />} />
            <Route path="/ke-hoach-cua-toi" element={<MyPlans />} />
            <Route path="/ke-hoach-chi-tiet" element={<PlanDetails />}></Route>
            <Route path="/create-plans" element={<CreatePlans />} />
            {/* <Route path="/lien-he" element={<Contact />} /> */}
            <Route path="/ca-nhan" element={<Profile />} />

            <Route
              path="/dang-nhap"
              element={
                <GoogleOAuthProvider
                  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                >
                  <Login />
                </GoogleOAuthProvider>
              }
            />
            {/* <Route path="/dang-ky" element={<Register />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </AuthProvider>
  );
}

export default App;
