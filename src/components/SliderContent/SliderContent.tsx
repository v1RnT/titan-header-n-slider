import styles from "./SliderContent.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  figSrc: string;
  imgSrc: string;
};

export const SliderContent: FC<Props> = ({
  title,
  description,
  figSrc,
  imgSrc,
}) => {
  return (
    <div className={styles["slider-content"]}>
      <div className={styles["slider-content__info"]}>
        <h1 className={styles["slider-content__title"]}>{title}</h1>
        <p className={styles["slider-content__description"]}>{description}</p>
        <Link to="/" className={styles["slider-content__button"]}>
          Learn more
        </Link>
      </div>
      <div className={styles["slider-content__pics"]}>
        <img src={figSrc} className={styles["slider-content__fig"]}></img>
        <img src={imgSrc} className={styles["slider-content__pic"]} />
      </div>
    </div>
  );
};
