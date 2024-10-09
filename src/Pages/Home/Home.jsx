// import styles from "./Home.module.css";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";
import { useState } from "react";

function Home({ isHidden }) {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar isHidden={isHidden} setCategory={setCategory} />
      <div
        className={`${styles.container} ${
          isHidden ? styles.largeContainer : ""
        }`}
      >
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
