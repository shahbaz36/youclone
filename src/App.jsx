import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNav from "./components/Navbar/PageNav";
import { useState } from "react";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Video/Video.jsx";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const handleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <BrowserRouter>
      <PageNav handleIsHidden={handleIsHidden} />
      <Routes>
        <Route path="/" element={<Home isHidden={isHidden} />} />
        <Route path="/:category" element={<Home isHidden={isHidden} />} />
        <Route path="/:category/video/:categoryId/:id" element={<Video />} />
        <Route path="/video/:categoryId/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
