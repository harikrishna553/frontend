import University from "./pages/University";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import News from "./pages/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="university" element={<University />}>
          <Route path="alumni" element={<Alumni />} />
          <Route index element={<About />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
