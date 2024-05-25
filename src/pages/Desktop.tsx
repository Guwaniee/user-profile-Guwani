import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.background} />
      <section className={styles.mainContentParent}>
        <FrameComponent1 />
        <img className={styles.frameChild} alt="" src="/ellipse-1-1.svg" />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Desktop;
