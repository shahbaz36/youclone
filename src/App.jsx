import { BrowserRouter } from "react-router-dom";
import PageNav from "./components/Navbar/PageNav";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const handleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <BrowserRouter>
      <PageNav handleIsHidden={handleIsHidden} />
      <Sidebar isHidden={isHidden} />
    </BrowserRouter>
  );
}

export default App;
