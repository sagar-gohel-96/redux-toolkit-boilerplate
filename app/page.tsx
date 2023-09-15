"use client";
import styles from "./page.module.css";
import { store } from "../src/store";
import { Provider } from "react-redux";
import { Home } from "@/src/component/";

export default function App() {
  return (
    <div className={styles.main}>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
