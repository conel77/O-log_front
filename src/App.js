import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/result" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
