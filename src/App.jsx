import { BrowserRouter } from "react-router-dom";
import PageNav from "./components/Navbar/PageNav";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
