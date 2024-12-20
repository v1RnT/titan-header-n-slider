import { Outlet } from "react-router-dom";
import styles from "./styles/App.module.scss";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
