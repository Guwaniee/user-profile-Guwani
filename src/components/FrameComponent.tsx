import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.profileContentWrapper}>
      <div className={styles.profileContent}>
        <div className={styles.detailsContainer}>
          <div className={styles.contactInfoParent}>
            <div className={styles.contactInfo}>
              <h1 className={styles.johnDoe}>John Doe</h1>
            </div>
            <b className={styles.melbourneAustralia}>Melbourne, Australia</b>
          </div>
        </div>
        <div className={styles.interactionsContentWrapper}>
          <div className={styles.interactionsContent}>
            <div className={styles.feedbackContainer}>
              <div className={styles.feedbackContent}>
                <div className={styles.feedbackHeader}>
                  <div className={styles.feedbackLabels}>
                    <div className={styles.count}>21</div>
                  </div>
                  <b className={styles.feedbacks}>Feedbacks</b>
                </div>
              </div>
              <div className={styles.feedbackDivider} />
            </div>
            <div className={styles.clientsContainer}>
              <div className={styles.clientsContent}>
                <div className={styles.clientCount}>6</div>
              </div>
              <b className={styles.currentClients}>Current clients</b>
            </div>
          </div>
        </div>
        <div className={styles.buttonFollowParent}>
          <div className={styles.buttonFollow}>
            <div className={styles.buttonFollowChild} />
            <b className={styles.home}>Home</b>
          </div>
          <div className={styles.buttonMessage}>
            <div className={styles.buttonMessageChild} />
            <b className={styles.settings}>Settings</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
