import { Route, Routes } from "react-router-dom";
import { Custom404 } from "./pages/404";
import { Code } from "./pages/code";
import { CodeDetails } from "./pages/codeDetails";
import { Community } from "./pages/community";
import { CommunityDetails } from "./pages/communityDetails";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Custom404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/code" element={<Code />} />
      <Route path="/code/courseId" element={<CodeDetails />} />
      {/* /code/:courseId */}
      <Route path="/community" element={<Community />} />
      <Route path="/community/couseId" element={<CommunityDetails />} />
      {/* /community/:courseId */}
    </Routes>
  );
}
