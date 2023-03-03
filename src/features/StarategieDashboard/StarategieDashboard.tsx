import { FC } from "react";
import cn from "classnames";
import { Button } from "../../components";
import s from "./starategieDashboard.module.scss";

interface StarategieDashboardProps {
  theme: "light" | "dark";
  clickThemeButtonHandler: () => void;
}

export const StarategieDashboard: FC<StarategieDashboardProps> = ({
  theme,
  clickThemeButtonHandler,
}) => {
  return (
    <div className={cn(s.wrapper, s[theme])}>
      <button
        type="button"
        className={s.themeButton}
        onClick={clickThemeButtonHandler}
      />
      <div className={s.startegieButtons}>
        <p>Стратегия №</p>
        <Button className={s.button}>1</Button>
        <Button className={s.button}>2</Button>
        <Button className={s.button}>3</Button>
        <Button className={cn(s.button, s.reload)}>Reload</Button>
      </div>

      <div className={s.currencyButtons}>
        <p>Валюта</p>
        <Button className={s.button}>USD</Button>
        <Button className={s.button}>BTC</Button>
        <p>Комментарий</p>
      </div>
    </div>
  );
};
