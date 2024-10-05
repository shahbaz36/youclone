// import styles from "./Home.module.css";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

function Home({ isHidden }) {
  return (
    <>
      <Sidebar isHidden={isHidden} />
      <div
        className={`${styles.container} ${
          isHidden ? styles.largeContainer : ""
        }`}
      >
        <Feed />
      </div>
    </>
  );
}

export default Home;
