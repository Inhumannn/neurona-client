import { Route, Routes } from "react-router-dom";
import { Custom404 } from "./pages/404";
import { Code } from "./pages/code";
import { CodeDetails } from "./pages/codeDetails";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Custom404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
      <Route path="/code/courseId" element={<CodeDetails />} />
      {/* /code/:courseId */}
    </Routes>
  );
}

export default App;
