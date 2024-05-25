import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.banner} />
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.johnDoe}>John Doe</div>
        <div className={styles.wrapperCircle}>
          <img
            className={styles.circleIcon}
            loading="lazy"
            alt=""
            src="/pic2.png"
          />
        </div>
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/notification@2x.png"
        />
        <div className={styles.divider} />
        <img
          className={styles.srvLogoIcon}
          loading="lazy"
          alt=""
          src="/srv-logo.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
      </header>
    </div>
  );
};

export default FrameComponent1;
