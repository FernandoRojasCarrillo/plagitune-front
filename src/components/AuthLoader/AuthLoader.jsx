import { useState, useEffect } from "react";
import style from "./AuthLoader.module.css";

const AuthLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return oldProgress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.loader}>
        <div className={style.circleContainer}>
          <div className={style.outerCircle}></div>
        </div>

        <div className={style.circleContainer}>
          <div className={style.centerCircle}></div>
        </div>

        <div className={style.circleContainer}>
          <div className={style.innerCircle}></div>
        </div>

        <svg className={style.userIcon} fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>

        <div className={style.progress}>
          <div className={style.progressText}>{Math.round(progress)}%</div>
        </div>
      </div>

      <div className={style.text}>Guardando usuario...</div>
    </div>
  );
};

export default AuthLoader;
