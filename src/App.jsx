import { BrowserRouter } from "react-router-dom";
import PageNav from "./components/Navbar/PageNav";
import { useState } from "react";
import Home from "./Pages/Home/Home";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const handleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <BrowserRouter>
      <PageNav handleIsHidden={handleIsHidden} />
      <Home isHidden={isHidden} />
    </BrowserRouter>
  );
}

export default App;
