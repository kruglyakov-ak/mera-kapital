import { FC, useState, MouseEvent, useEffect } from "react";
import cn from "classnames";
import { Button } from "../../components";
import s from "./starategieDashboard.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchStrategie } from "../../store/reducers/StrategiesSlice";
import ApexChart from "../../components/ApexCharts/ApexCharts";

interface StarategieDashboardProps {
  theme: "light" | "dark";
  clickThemeButtonHandler: () => void;
}

export const StarategieDashboard: FC<StarategieDashboardProps> = ({
  theme,
  clickThemeButtonHandler,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading, btcData, title, usdData } = useAppSelector((state) => state.strategies);
  const [currentStrategie, setCurrentStrategie] = useState(1);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
 
  const clickStrategieButtonHandler = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    setCurrentStrategie(Number(currentTarget.textContent));
  };

  const clickCurrencyButtonHandler = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    setCurrentCurrency(
      currentTarget.textContent ? currentTarget.textContent : "USD"
    );
  };

  const clickReloadButtonHandler = () => {
    dispatch(fetchStrategie(currentStrategie));
  };

  useEffect(() => {
    dispatch(fetchStrategie(currentStrategie));
  }, [currentStrategie, dispatch]);

  return (
    <div className={cn(s.wrapper, s[theme])}>
      <button
        type="button"
        className={s.themeButton}
        onClick={clickThemeButtonHandler}
      />
      <div className={s.startegieButtons}>
        <p>Стратегия №</p>
        <Button
          className={cn(s.button, { [s.active]: currentStrategie === 1 })}
          onClick={clickStrategieButtonHandler}
        >
          1
        </Button>
        <Button
          className={cn(s.button, { [s.active]: currentStrategie === 2 })}
          onClick={clickStrategieButtonHandler}
        >
          2
        </Button>
        <Button
          className={cn(s.button, { [s.active]: currentStrategie === 3 })}
          onClick={clickStrategieButtonHandler}
        >
          3
        </Button>
        <Button
          className={cn(s.button, s.reload)}
          onClick={clickReloadButtonHandler}
        >
          Reload
        </Button>
      </div>

      <div className={s.currencyButtons}>
        <p>Валюта</p>
        <Button
          className={cn(s.button, { [s.active]: currentCurrency === "USD" })}
          onClick={clickCurrencyButtonHandler}
        >
          USD
        </Button>
        <Button
          className={cn(s.button, { [s.active]: currentCurrency === "BTC" })}
          onClick={clickCurrencyButtonHandler}
        >
          BTC
        </Button>
        <p>{isLoading ? "Идет загрузка..." : title ? title : "Комментарий"}</p>
      </div>

      <div className={s.chartWrapp}>
        <ApexChart currency={currentCurrency} dataset={currentCurrency === "USD" ? usdData : btcData} />
      </div>
    </div>
  );
};
