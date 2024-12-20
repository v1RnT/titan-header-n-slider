import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles["not-found"]}>
      <span className={styles["not-found__text"]}>
        This Page Doesn't Exist Yet
      </span>
    </div>
  );
};
