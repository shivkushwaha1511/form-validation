import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-1" element={<Question1 />} />
        <Route path="/question-2" element={<Question2 />} />
        <Route path="/question-3" element={<Question3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
