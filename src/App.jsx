import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  BlogDetails,
  Blogs,
  SignIn,
  VerifyNumber,
  VerifyOTP,
} from "./Component";
import Layout1 from "./Layout/Layout1";
import AuthLayout from "./Layout/AuthLayout";
import WithLazyComponet from "./LazyLoading/WithLazyLoading";
const LazyHome = WithLazyComponet(() => import("./Component/Home/Home"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<LazyHome />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="verify-number" element={<VerifyNumber />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
