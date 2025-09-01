import { Route, Routes } from "react-router-dom";
import { Custom404 } from "./pages/404";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Custom404 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
