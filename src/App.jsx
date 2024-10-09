import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNav from "./components/Navbar/PageNav";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/video";

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
        <Route path="/:categoryId" element={<Home isHidden={isHidden} />} />
        <Route path="/video" element={<Video />} />
        <Route path="/video/:category/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
